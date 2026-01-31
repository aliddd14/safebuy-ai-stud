import { WaitlistData, WebhookResponse } from '../types';

/**
 * Submits the user data to a Google Sheet Webhook (or Supabase Edge Function).
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Use the `doPost(e)` function to handle the request and appendRow([timestamp, email, name, source]).
 * 4. Deploy as Web App -> Execute as: Me -> Who has access: Anyone.
 * 5. Replace `GOOGLE_SCRIPT_URL` below with your generated URL.
 */

// Placeholder URL - in production, replace with actual endpoint
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; 

export const submitToWaitlist = async (data: WaitlistData): Promise<WebhookResponse> => {
  try {
    // Simulating network delay for the UX feel (remove this in production if desired)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // NOTE: This fetch call is commented out to prevent errors in this demo environment.
    // Uncomment and configure CORS in your Google Script to make it live.
    
    /*
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Scripts often require no-cors for simple submissions
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });
    */

    // Mock success for demo purposes
    console.log("Mock Submission Successful:", data);
    
    return {
      success: true,
      message: "You're on the list! We'll stay in touch."
    };

  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again."
    };
  }
};