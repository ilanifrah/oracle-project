import { Router } from 'express';

const router = Router();

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxR6Sn-48QKqp-SFrQNEGPHuOTLkjOn429p16crl_DJhYfvCbd2yk2jDvbC9uqdwUQ3jg/exec';

router.post('/', async (req, res) => {
  try {
    await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('[analytics] GAS relay error:', err.message);
    res.json({ ok: false });
  }
});

export default router;
