import { Router } from 'express';

const router = Router();

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzbcpw9bt2FUX6AljDeNVlLyBzfl8K6wTNNTPv38M69uA38Z-vgvnktLH14prZvNNhj/exec';

router.post('/', async (req, res) => {
  const payload = req.body;
  console.log('[analytics] received:', JSON.stringify(payload));

  try {
    // GAS web apps issue a 302 redirect on POST requests.
    // We embed the payload both in the body AND as a URL query param so that
    // GAS can read it via e.postData.contents (JSON body) OR e.parameter.payload
    // (URL param) — whichever the script uses, and regardless of redirect behavior.
    const encodedPayload = encodeURIComponent(JSON.stringify(payload));
    const url = `${GAS_URL}?payload=${encodedPayload}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await response.text();
    console.log(`[analytics] GAS status=${response.status} body=${text.slice(0, 300)}`);

    res.json({ ok: true });
  } catch (err) {
    console.error('[analytics] error:', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
