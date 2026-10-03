module.exports = async function (context, req) {
  try {
    const r = await fetch('https://author-test.66997834.workers.dev/stats');
    const html = await r.text();
    context.res = { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }, body: html };
  } catch (e) {
    context.res = { status: 502, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: 'upstream error' };
  }
};
