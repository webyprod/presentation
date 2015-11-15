// appel module principal
app


// controller pour la page About
.controller('aboutCtrl', function(){
  var t = this;
  t.titre = "A propos du site";
  
  t.technologies = "Technologies utilisées : ";
  
  t.deploiement = [{nom: "deploiement", element:"Heroku"}];
  
  t.frontend = [{nom:"front-end", element: ['html5','css3','bootstrap','javascript','angularjs']}];
  
  t.backend = [{nom:"back-end", element:["Nodejs", "Expressjs"]}];
});