import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {

  try {

    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          success: false,
          message: "Method not allowed",
        }),
      };
    }

    const { name, email, subject, message } = JSON.parse(event.body);

    // BASIC VALIDATION

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "All required fields must be filled",
        }),
      };
    }

    if (!email.includes("@")) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Invalid email",
        }),
      };
    }

    if (message.length > 2000) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Message too long",
        }),
      };
    }

    // SEND EMAIL

    await resend.emails.send({

      from: "Portfolio <onboarding@resend.dev>",

      to: "amritasahu490@gmail.com",

      subject: `Portfolio Contact: ${subject || "New Message"}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr/>

          <p>${message}</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully",
      }),
    };

  } catch (err) {

    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Server error",
      }),
    };
  }
}