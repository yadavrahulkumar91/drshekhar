const GMAIL_API_ENDPOINT = 'https://whatsapp-api-kappa.vercel.app/api/gmail/send';

export interface EmailPayload {
  to: string;
  subject: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(GMAIL_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      return {
        success: false,
        error: `Email service error: ${response.statusText}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

export function createAppointmentEmailBody(
  patientName: string,
  appointmentDate: string,
  appointmentTime: string,
  patientEmail: string,
  patientPhone: string
): string {
  return `
<html>
  <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #059669; text-align: center;">Appointment Confirmed</h2>
      
      <div style="background-color: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 20px; margin: 20px 0;">
        <h3 style="color: #047857; margin-top: 0;">Appointment Details</h3>
        
        <div style="margin: 15px 0;">
          <p><strong>Patient Name:</strong> ${patientName}</p>
          <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
          <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
          <p><strong>Patient Email:</strong> ${patientEmail}</p>
          <p><strong>Patient Phone:</strong> ${patientPhone}</p>
          <p><strong>Service Type:</strong> Teleconsultation</p>
        </div>
      </div>
      
      <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
        <p><strong>Important:</strong> Please ensure you are available at the scheduled time. A video call link or further instructions will be sent to your email before the appointment.</p>
      </div>
      
      <p style="text-align: center; color: #6b7280; font-size: 12px;">
        If you need to reschedule or cancel, please contact us as soon as possible.
      </p>
    </div>
  </body>
</html>
  `.trim();
}
