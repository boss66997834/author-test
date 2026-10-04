module.exports = async function (context, req) {
  const qs = (req.url && req.url.split('?')[1]) ? '?' + req.url.split('?')[1] : '';
  const ip = ((req.headers && (req.headers['x-forwarded-for'] || '')) || '').split(',')[0].trim();
  const extra = ip ? ((qs ? '&' : '?') + 'ip=' + encodeURIComponent(ip)) : '';
  try {
    await fetch('https://author-test.66997834.workers.dev/track' + qs + extra);
  } catch (e) {}
  context.res = { status: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' }, body: '1' };
};
