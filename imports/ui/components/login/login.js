import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './login.html';

import { name as Register } from '../register/register';

class Login {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';

    this.helpers({
    })
  }

  login() {
    Meteor.loginWithPassword(this.credentials.email, this.credentials.password,
      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          this.$state.go('users');
        }
      })
    );
  }

  googleLogin() {
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, this.$bindToContext((error) => {
      if (error) {
        console.log(error); //If there is any error, will get error here
      } else {
        console.log(Meteor.user());// If there is successful login, you will get login details here
       this.$state.go('users');
      }
      })
    );
  }

  facebookLogin() {
    Meteor.loginWithFacebook({}, this.$bindToContext((error) => {
      if (error) {
        console.log(error); //If there is any error, will get error here
      } else {
        console.log(Meteor.user());// If there is successful login, you will get login details here
       this.$state.go('users');
      }
      })
    );
  }
}

const name = 'login';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Login
  })
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>'
  });
}
