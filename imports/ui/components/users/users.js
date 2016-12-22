import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Accounts } from 'meteor/accounts-base';
import { Rides } from '../../../api/rides';
import template from './users.html';

class Users {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);
    this.subscribe('users');
    this.subscribe('userData');
    
    this.add=function(){
      $state.go('post');
    }

    this.helpers({
      users_all() {
        return Meteor.users.find({});
      },
      isLoggedIn() {
        return !!Meteor.userId();
      },
      isEmailVerified(){
        if (Meteor.user() && Meteor.user().emails && Meteor.user().emails[0].verified)
          return true;
        else if(Meteor.user() && Meteor.user().services && Meteor.user().services.google)
          return true;
        else if(Meteor.user() && Meteor.user().services && Meteor.user().services.facebook)
           return true;
        else 
          return false;
      },
      getServiceData(){
        if (Meteor.user() && Meteor.user().services && Meteor.user().services.google)
          return Meteor.user().services.google;
        else if (Meteor.user() && Meteor.user().services && Meteor.user().services.facebook)
          return Meteor.user().services.facebook;
      },

      getServiceImageUrl(){
        if (Meteor.user() && Meteor.user().services && Meteor.user().services.facebook)
          return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
      },

       rides() {
        return Rides.find({});
      }

      
    });
  }

}

const name = 'users';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Users
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('users', {
    url: '/users',
    template: '<users></users>'
  });
}
