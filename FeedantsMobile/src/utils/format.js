const MONTHS = {
  en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
  hi: ['जन','फ़र','मार्च','अप्रैल','मई','जून','जुल','अग','सित','अक्टू','नव','दिस'],
};
const p = n => String(n).padStart(2, '0');
export const fmtDate = (iso, lang = 'en') => {
  const d = new Date(iso);
  return `${d.getDate()} ${(MONTHS[lang] || MONTHS.en)[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
};
export const fmtTime = iso => {
  const d = new Date(iso); const h = d.getHours();
  return `${p(h % 12 || 12)}:${p(d.getMinutes())} ${h >= 12 ? 'PM' : 'AM'}`;
};
export const fmtCountdown = ms => {
  const t = Math.max(0, Math.floor(ms / 1000));
  return `${p(Math.floor(t / 86400))}d : ${p(Math.floor((t % 86400) / 3600))}h : ${p(Math.floor((t % 3600) / 60))}m : ${p(t % 60)}s`;
};
export const inr = n => `₹ ${Number(n).toLocaleString('en-IN')}`;
