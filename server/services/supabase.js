import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

if (!url || !key) {
  console.warn('⚠️  Supabase env vars missing — DB calls will fail.');
}

export const supabase = createClient(url || '', key || '');
