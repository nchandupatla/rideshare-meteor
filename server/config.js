import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';

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

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '227951454296388',
    secret: 'cbe57b7141177e6b3163bbf6da9679b8'
});