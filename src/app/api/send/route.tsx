
// import resend from 'resend';

// import { NextResponse } from 'next/server';
// // import { EmailTemplate} from '../../../components/EmailTemplate';
// import { Resend } from 'resend';


// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <haimishaikh149@gmail.com>',
//       to: ['haimishaikh149@gmail.com'],
//       subject: 'Hello world',
//       react:( 
//       <>
//       <p>Email Body</p>
      
//       </>
      
//       )
//     });

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }





import { NextResponse } from 'next/server';
import { Resend } from 'resend';  // sirf yeh wala import rakhein

const resend = new Resend(process.env.RESEND_API_KEY);

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
