import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase/client';

export async function POST(req: NextRequest) {
  const { name, email, role } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  const { error } = await getSupabase().from('waitlist').insert({ name, email, role });

  if (error) {
    // Duplicate email — treat as success so we don't leak whether email exists
    if (error.code === '23505') {
      return NextResponse.json({ ok: true });
    }
    console.error('Waitlist insert error:', error.message);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
