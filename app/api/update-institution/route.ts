// app/api/update-institution/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { institution, userId } = await req.json();

  if (!userId || !institution) {
    return NextResponse.json(
      { success: false, error: 'Missing userId or institution' },
      { status: 400 }
    );
  }

  const url = `https://api.clerk.com/v1/users/${userId}/metadata`;

  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY!}`,
      },
      body: JSON.stringify({
        public_metadata: {
          institution,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Failed:', data);
      return NextResponse.json({ success: false, error: data }, { status: res.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Network/Server error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
