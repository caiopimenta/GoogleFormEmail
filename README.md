# GoogleFormEmail
Script to send automated emails to new entries


1. Create a new Google Form with one or more fields. You can also use an existing form but do make sure you have a field called “Email” in the form where the submitter will input their email address. This should be a mandatory field.
2. Open the Google Spreadsheet that is storing the form responses, go to the Tools menu and choose the Script Editor option.
3. Copy-paste the Google Script into the script editor and press (ctrl+s) or click the floppy icon to save the script. You can give it any name.
4. You need to make a few adjustments to the script. For instance, add your email address in line #26, put your name in line #29 and add the custom message in line #36.
5. While you are inside the Script Editor, choose the Run menu and select Initialize. Authorize the script and it will now send confirmation emails on behalf of the Gmail account that created the script.

That code was originally [here](http://www.labnol.org/internet/auto-confirmation-emails/28386/).