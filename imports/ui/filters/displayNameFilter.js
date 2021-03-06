import angular from 'angular';

const name = 'displayNameFilter';

function DisplayNameFilter(user) {
  if (!user) {
    return '';
  }

  if (user.profile && user.profile.name) {
    return user.profile.name;
  }

  if (user.emails) {
    return user.emails[0].address;
  }
  
  if(user.services && user.services.google){
    return user.services.google.email;
  }

  return user;
}

// create a module
export default angular.module(name, [])
  .filter(name, () => {
    return DisplayNameFilter;
  });
