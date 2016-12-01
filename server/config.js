import ServiceConfiguration from 'meteor/service-configuration'
// Accounts.loginServiceConfiguration.remove({
//   service: "facebook"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "facebook",
//   appId: "yourAppId",
//   secret: "yourSecret"
// });

// Accounts.loginServiceConfiguration.remove({
//   service: "google"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "google",
//   clientId: "125831784605-tird7vmiccms5dakj0he4feopf5mkvga.apps.googleusercontent.com",
//   secret: "xlfE6giRVmM1nShsKAglZIqn"
// });

// ServiceConfiguration.configurations.upsert(
//   { service: "google" },
//   {
//     $set: {
//       clientId: "125831784605-tird7vmiccms5dakj0he4feopf5mkvga.apps.googleusercontent.com",
//       loginStyle: "popup",
//       secret: "xlfE6giRVmM1nShsKAglZIqn"
//     }
//   }
// );