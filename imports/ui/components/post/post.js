import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './post.html';

class Post {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);
    this.subscribe('users');
    this.subscribe('userData');
    

    this.helpers({
      

      
    });
  }

}

const name = 'post';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Post
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('post', {
    url: '/post',
    template: '<post></post>'
  });
}
