import '../imports/api/users';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';

if (Meteor.isServer) {
    Meteor.startup(function () {
        process.env.MAIL_URL = "smtp://tinesipo%40gmail.com:mayabazar@smtp.gmail.com:465/";
        Accounts.config({
            sendVerificationEmail: true
        })

        ServiceConfiguration.configurations.upsert(
            { service: "google" },
            {
                $set: {
                    clientId: "125831784605-tird7vmiccms5dakj0he4feopf5mkvga.apps.googleusercontent.com",
                    loginStyle: "popup",
                    secret: "xlfE6giRVmM1nShsKAglZIqn"
                }
            }
        );
    })
}