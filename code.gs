/* Send Confirmation Email with Google Forms */
 
function Initialize() {
 
  var triggers = ScriptApp.getProjectTriggers();
 
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
 
  ScriptApp.newTrigger("SendConfirmationMail")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
 
}
 
function SendConfirmationMail(e) {
 
  try {
 
    var ss, cc, sendername, subject, columns;
    var message, value, textbody, sender;
 
    // This is your email address and you will be in the CC
    cc = "youremail@example.com";
 
    // This will show up as the sender's name
    sendername = "Your name";
 
    // Optional but change the following variable
    // to have a custom subject for Google Docs emails
    subject = "Welcome to my Form";
 
    // This is the body of the auto-reply
    message = "Hi ";
    message += e.namedValues["Name"].toString();
    message += "!<br><br>I'm really glad you signed up!<br><br><br>Best,<br><br>Me<br><br>";
 
    
 
    // This is the submitter's email address
    // Make sure you havea  field called Email in the Google Form
    sender = e.namedValues["Email"].toString();
 
    /*// Only include form values that are not blank
    ss = SpreadsheetApp.getActiveSheet();
    columns = ss.getRange(1, 1, 1, ss.getLastColumn()).getValues()[0];

    for (var keys in columns) {
      var key = columns[keys];
      var val = e.namedValues[key] ? e.namedValues[key].toString() : "";
      if (val !== "") {
        message += key + ' :: ' + val + "<br />";
      }
    }*/
 
    textbody = message.replace("<br>", "\n");
 
    GmailApp.sendEmail(sender, subject, textbody, {
      cc: cc,
      name: sendername,
      htmlBody: message
    });
 
  } catch (e) {
    Logger.log(e.toString());
  }
}
