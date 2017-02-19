import { Meteor } from 'meteor/meteor';

import '/imports/api/items';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://pawpulace:Pawpulacepwd1@smtp.sendgrid.net:587';
  Accounts.emailTemplates.siteName = "Pawpulace";
  Accounts.emailTemplates.from = " Pawpulace <noreply@pawpulace.com>";
  //Accounts.emailTemplates.resetPassword.subject = function(user){ return " how to reset password";};
});