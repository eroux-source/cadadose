"use client";

import { useSyncExternalStore } from "react";

/**
 * Local-first store. All health data stays on the user's device (localStorage).
 * No account, no server, nothing leaves the phone unless the user exports it.
 */
export interface Profile {
  medicationSlug: string;
  doseValue: number | null;
  doseUnit: "mg" | "UI";
  /** 0 = Sunday … 6 = Saturday (weekly meds). */
  weekday: number;
  /** "HH:MM" local time for the reminder. */
  reminderTime: string;
}

export interface Shot {
  id: string;
  at: string; // ISO datetime
  doseValue: number | null;
  doseUnit: "mg" | "UI";
  siteIndex: number; // index into dictionary sites
  note?: string;
}

export interface WeightEntry {
  id: string;
  at: string; // ISO date
  kg: number;
}

export interface SymptomEntry {
  id: string;
  at: string;
  symptomIndex: number;
  intensity: 0 | 1 | 2;
  note?: string;
}

export interface Stock {
  pensAtHome: number;
  /** ISO date the current pen/vial was first used. */
  currentOpenedAt: string | null;
  /** Days of use allowed after opening; defaults to the catalog value, user can override for vials. */
  daysAfterOpening: number | null;
}

export interface Store {
  version: 1;
  profile: Profile | null;
  shots: Shot[];
  weights: WeightEntry[];
  symptoms: SymptomEntry[];
  stock: Stock;
}

const KEY = "cadadose:v1";

const empty: Store = {
  version: 1,
  profile: null,
  shots: [],
  weights: [],
  symptoms: [],
  stock: { pensAtHome: 0, currentOpenedAt: null, daysAfterOpening: null },
};

let cache: Store | null = null;
const listeners = new Set<() => void>();

function read(): Store {
  if (cache) return cache;
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? { ...empty, ...(JSON.parse(raw) as Store) } : empty;
  } catch {
    cache = empty;
  }
  return cache;
}

function write(next: Store) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable (private mode): keep in memory */
  }
  listeners.forEach((l) => l());
}

export function updateStore(mutate: (s: Store) => Store) {
  write(mutate(read()));
}

export function resetStore() {
  write(empty);
}

export function exportStore(): string {
  return JSON.stringify(read(), null, 2);
}

export function useStore(): Store {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    read,
    () => empty,
  );
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
