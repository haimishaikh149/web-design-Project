
import { NextResponse } from 'next/server';

import{ Resend} from 'resend';

const resend = new Resend('re_123456789');

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <haimishaikh149@gmail.com>',
      to: ['haimishaikh149@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>Email Body</p>
        </>
      )
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 }); // yahaan Response ko NextResponse mein change karein
  }
}
