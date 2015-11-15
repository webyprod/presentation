// appel module principal
app


// controller pour la page cursus
.controller('cursusCtrl', function(){
  var t = this;
  
  t.titre = "cursus";
  
  t.infos = "INFORMATIONS";
  
  t.age = [
  { infos : "age", reponse : '26'}
  ];
  
  t.surnom = [
  {infos : "surnom", reponse : "FOX"}
  ];
  
  t.niveau = [
  {infos: "niveau", reponse : "MASTER"}
  ];
  
  t.mail = [
  {infos:'mail', reponse : 'mk.alex1989@gmail.com'}
  ];
  
  t.telephone = [
  {infos: "telephone", reponse : "0751662787"}
  ];
  
  t.experiences = "EXPERIENCES"
  
  t.experience2015 = [
  {infos : "Emploi - 2015", reponse :"Chargé de Référencement - KEYRUS"},
  {infos : "Missions", reponse : "En charge du référencement de plusieurs clients, notamment Citroen, Renault. Mise en place stratégies de référencement OnLine, OffLine, Travail direct sur le codes Source Amelioration des differentes pages, travail egalement du Netlinking"}
  ];
  
  t.experience2014 = [
  {infos : "Emploi - 2014", reponse :"Développeur Référenceur SEO - EXPERTS REFERENCEMENT"},
  {infos : "Missions", reponse : "Partage d'un portefeuille d'une quarantaine de clients, mise en place techniques de référencement de A à Z, depuis l'audit du site [processus qui a lieu au tout début: Nous devons vérifier sur des outils comme SEMRUSH ou AHREFS si le site n'a pas subi de pénalités du type Panda ou Pingouin, si tel est le cas, nous devrons changer le nom de domaine et recommencer le travail déjà entamé par les clients. "}
  ];
  
  t.formations = "FORMATIONS";
  
  t.formation2014 = [
    {infos: 'formation - 2014', reponse : 'MASTER COMMERCE ELECTRONIQUE'}    
  ];
  
  t.formation2013 = [
  {infos : 'formation - 2013', reponse : "LICENCE GESTION ENTREPRISE OPTION COMMERCE ELECTRONIQUE"}
  ];
  
  
});