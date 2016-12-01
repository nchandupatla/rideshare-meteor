import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import { name as rideshare } from '../imports/ui/components/rideshare/rideshare';

function onReady() {
  angular.bootstrap(document, [
    rideshare
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
