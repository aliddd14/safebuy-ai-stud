import { WaitlistData, WebhookResponse } from '../types';

/**
 * ==========================================
 * GOOGLE SHEETS BACKEND SETUP INSTRUCTIONS
 * ==========================================
 * 
 * 1. Create a new Google Sheet at https://sheets.new
 * 2. Go to Extensions > Apps Script
 * 3. Delete any code in Code.gs and paste the following:
 * 
 *    function doPost(e) {
 *      var lock = LockService.getScriptLock();
 *      lock.tryLock(10000);
 *      try {
 *        var doc = SpreadsheetApp.getActiveSpreadsheet();
 *        var sheet = doc.getActiveSheet();
 *        
 *        // Check/Create Headers
 *        var headers = sheet.getRange(1, 1, 1, 4).getValues()[0];
 *        if (headers[0] !== 'Timestamp') {
 *          sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Email', 'Name', 'Source']]);
 *          sheet.setFrozenRows(1);
 *        }
 *        
 *        var data = JSON.parse(e.postData.contents);
 *        sheet.appendRow([new Date(), data.email, data.name || '', data.source || 'website']);
 *        
 *        return ContentService.createTextOutput(JSON.stringify({'result': 'success'})).setMimeType(ContentService.MimeType.JSON);
 *      } catch (e) {
 *        return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'error': e})).setMimeType(ContentService.MimeType.JSON);
 *      } finally {
 *        lock.releaseLock();
 *      }
 *    }
 * 
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Description: "Waitlist V1"
 * 7. Execute as: "Me" (your email)
 * 8. Who has access: "Anyone" (Crucial for it to work without login)
 * 9. Click "Deploy"
 * 10. Copy the "Web app URL" and paste it below as the value for GOOGLE_SCRIPT_URL
 */

// REPLACE THIS STRING WITH YOUR DEPLOYED GOOGLE SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdjHqkHwMdebrMb0G7riEg37IUuiTNjVw0590Oc1YJVm9UxyTsPsSR248tkgGbEucNsQ/exec'; 

export const submitToWaitlist = async (data: WaitlistData): Promise<WebhookResponse> => {
  // If the URL is still the placeholder, we'll simulate a success to avoid breaking the demo
  if (GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
    console.warn('⚠️ Google Script URL is not configured. Simulating success response.');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: "Mock success! (Configure GOOGLE_SCRIPT_URL in services/api.ts)"
    };
  }

  try {
    // We use no-cors to bypass CORS restrictions on Google Apps Script
    // This means we can't read the response status/body, but the data will be sent successfully.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'text/plain', // 'text/plain' avoids CORS preflight checks which Google Script doesn't handle natively
      },
      body: JSON.stringify(data),
    });

    // Since we can't read the response in 'no-cors' mode, we assume success if the network request didn't throw an error.
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