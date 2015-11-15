// appel module principale
app



// controller pour la page competences
.controller('skillsCtrl', function(){
  var t = this;
  t.titre = "competences";
  
  t.caption = "technologies";
  
  t.os = [
  {element :'Linux', items: ['MINT', 'DEBIAN', 'KUBUNTU', 'FEDORA']},
  {element :'Windows', items: ['WINDOWS 7', 'WINDOWS 8']}
  ]; 
  
  t.langages = [
  {element : 'Frontend', items : ['HTML5', 'CSS3', 'BOOTSTRAP3', 'JAVASCRIPT', 'ANGULARJS']}, 
  {element : 'Backend', items : ['PHP', 'RUBY ON RAILS', 'NODEJS', 'EXPRESSJS']}
  ];
  
  t.bdd = [
  {element: 'Bases de Données', items: ['MYSQL','MONGODB']}
  ];
  
  t.outils = [
  {element:'Outils', items : ['HEROKU', 'APACHE','GITHUB','BITBUCKET']}
  ];
});
