module.exports = async function (context, req) {
  const from = (req.query.from || 'direct').slice(0, 200);
  try {
    await fetch('https://author-test.66997834.workers.dev/track?from=' + encodeURIComponent(from), { timeout: 8000 });
  } catch (e) {}
  context.res = { status: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' }, body: '1' };
};
