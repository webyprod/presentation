// appel module principal
app


// controller pour la page Contact
.controller('contactCtrl', function(){
  var t = this;
  t.titre = "Contact";
  
  t.contacts = "Retrouvez tous mes projets sur :";
  
  t.repository = "https://github.com/webyprod";
  
});