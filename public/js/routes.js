angular.module('routagePages', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  
  $routeProvider
  
  // vers la page d'accueil
  .when('/', {
    templateUrl: 'views/templates/home.html',
    controller: 'homeCtrl',
    controllerAs: 'home'
  })
  
  // vers la page loisirs
  .when('/loisirs',{
    templateUrl: 'views/templates/loisir.html',
    controller: 'loisirCtrl',
    controllerAs: 'loisir'
  })
  
  // vers la page cursus
  .when('/cursus', {
    templateUrl: 'views/templates/cursus.html',
    controller: 'cursusCtrl',
    controllerAs: 'cursus'
  })
  
  // vers la page competences
  .when('/skills', {
    templateUrl: 'views/templates/skills.html',
    controller: 'skillsCtrl',
    controllerAs: 'skills'
  })
  
  // vers la page contact
  .when('/contact', {
    templateUrl: 'views/templates/contact.html',
    controller: 'contactCtrl',
    controllerAs: 'contact'
  })
  
  // vers la page A propos
  .when('/about', {
    templateUrl: 'views/templates/about.html',
    controller: 'aboutCtrl',
    controllerAs: 'about'
  });

  // Configuration URLS
  $locationProvider.html5Mode(true);
  
});