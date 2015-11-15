// appel module principal
app


// controller pour la page loisirs
.controller('loisirCtrl', function(){
  var t = this;
  t.titre = "Loisirs";
  
  t.titre1 = "Electronique";
  
  t.titre2 = "Sport";
  
  t.electronique = "En plus de ma passion pour le web, j'ai depuis l'adolescence cultivé une certaine affinité avec l'electronique. Mon gout pour la communiation et l'electronique m'ont conduit à vouloir passer ma licence de Radioamateur.";
  
  t.radioamateur = "Cette licence de radioamateur permet à tous les titulaires de créer leur émetteur et de pouvoir communiquer avec le monde entier. ";
});

