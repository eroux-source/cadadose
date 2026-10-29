import { medications } from "@/lib/medications";
import { siteUrl } from "@/lib/locales";

/**
 * Embeddable widget (iframe): "até quando a caneta vale", by the bula. Pure HTML, no JS framework,
 * so clinics can paste one line. Links back to the sourced page (that's the backlink).
 */
export function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("med") ?? "mounjaro";
  const med = medications.find((m) => m.slug === slug && m.storageDays) ?? medications[0];
  const opts = medications.filter((m) => m.storageDays).map((m) => `<option value="${m.slug}"${m.slug === med.slug ? " selected" : ""}>${m.name.split(" (")[0]}</option>`).join("");
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Validade da caneta · CadaDose</title>
<style>body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#f7f6f1;color:#111a17}.w{padding:14px;border:1px solid #e3e2da;border-radius:6px;background:#fff;max-width:420px;margin:0 auto}label{font-size:12px;color:#6b746f;display:block;margin-top:8px}select,input{width:100%;padding:8px;border:1px solid #e3e2da;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box}.r{margin-top:12px;padding:12px;border-radius:6px;background:#e9ece4;font-size:14px}.big{font-size:26px;font-weight:700;color:#3f5a46}.s{font-size:11px;color:#6b746f;margin-top:8px}a{color:#3f5a46}</style></head><body><div class="w">
<strong>Até quando a caneta vale?</strong>
<label>Medicamento<select id="m" onchange="go()">${opts}</select></label>
<label>Data em que abriu a caneta / tirou a caixa da geladeira<input id="d" type="date" onchange="calc()"></label>
<div class="r" id="out">Informe a data.</div>
<p class="s">Regra da bula do paciente aprovada pela ANVISA, citada em <a id="lnk" href="${siteUrl}/medicamentos/${med.slug}/validade-depois-de-aberta" target="_blank" rel="noopener">cadadose.com</a>. Apenas para informação, não é orientação médica.</p></div>
<script>
const R=${JSON.stringify(Object.fromEntries(medications.filter((m) => m.storageDays).map((m) => [m.slug, { d: m.storageDays, l: m.storageLabel, n: m.name.split(" (")[0] }])))};
function go(){const s=document.getElementById('m').value;document.getElementById('lnk').href='${siteUrl}/medicamentos/'+s+'/validade-depois-de-aberta';calc()}
function calc(){const s=document.getElementById('m').value,v=document.getElementById('d').value;if(!v)return;const r=R[s],d0=new Date(v+'T12:00:00'),e=new Date(d0.getTime()+r.d*864e5),left=Math.ceil((e-Date.now())/864e5);document.getElementById('out').innerHTML='<div class="big">'+(left<0?'vencida':left+' dias')+'</div>'+r.n+': '+r.d+' dias '+r.l+'. Usar até <b>'+e.toLocaleDateString('pt-BR')+'</b>.'}
</script></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
