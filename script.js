var revolutionaries=[];
var choiceOne;
var choiceTwo;
var chooseOne=document.getElementById('photo1');
var chooseTwo=document.getElementById('photo2');
var response=document.getElementById('response');
var canvas=document.getElementById('myChart').getContext('2d');
var theChart;

function Heroes (name, path) {
  this.name=name;
  this.path=path;
  this.value=0;
  this.label=name;
  this.color='#9CBABA'
  this.highlight='#D18133'
  revolutionaries.push(this);
}

function PhotoSelector () {

  choiceOne=revolutionaries[Math.floor(Math.random() * revolutionaries.length)];
  choiceTwo=revolutionaries[Math.floor(Math.random() * revolutionaries.length)];
  while (choiceOne===choiceTwo) {
    choiceTwo=revolutionaries[Math.floor(Math.random() * revolutionaries.length)]
   }
  chooseOne.src=choiceOne.path;
  chooseTwo.src=choiceTwo.path;
}

function Voteone () {
  choiceOne.value+=1;
  UpdateChart();
  PhotoSelector();
  localStorage.setItem('revolutionaries', JSON.stringify(revolutionaries));
  PhotoSelector();
}

function Votetwo () {
  choiceTwo.value+=1;
  UpdateChart();
  PhotoSelector();
  localStorage.setItem('revolutionaries', JSON.stringify(revolutionaries));
  PhotoSelector();
}

function UpdateChart () {
  theChart=new Chart(canvas).Doughnut(revolutionaries, {
    animationSteps: 200,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: true
  });
}

var castro=new Heroes('Fidel Castro', 'img/castro.jpg');
var che=new Heroes('Ernest Che Guevara', 'img/che.jpg');
var obregon=new Heroes('Alvaro obregon', 'img/obregon.jpg');
var villa=new Heroes('Pancho Villa', 'img/villa.jpg');
var zapata=new Heroes('Emiliano Zapata', 'img/zapata1.jpg');
var bolivar=new Heroes('Simon Bolivar', 'img/bolivar.jpg');
var louverture=new Heroes('Toussaint Louverture','img/louverture.jpg');
var arevalo=new Heroes('Juan Jose Arevalo', 'img/arevalo.jpg');
var arbenz=new Heroes('Jacobo Arbenz', 'img/arbenz.jpg');
var sandino=new Heroes('Augusto Cesar Sandino','img/sandino.jpg');
var marti=new Heroes('Faribundo Marti','img/marti.jpg');
var marti1=new Heroes('Jose Marti', 'img/marti1.jpg');

function CheckLocal () {
  if (localstorage.revolutionaries) {
    starWarsPhotos=JSON.parse(localstorage.revolutionaries)
  } else {
    var castro=new Heroes('Fidel Castro', 'img/castro.jpg');
    var che=new Heroes('Ernest Che Guevara', 'img/che.jpg');
    var obregon=new Heroes('Alvaro Obregon', 'img/obregon.jpg');
    var villa=new Heroes('Pancho Villa', 'img/villa.jpg');
    var zapata=new Heroes('Emiliano Zapata', 'img/zapata1.jpg');
    var bolivar=new Heroes('Simon Bolívar', 'img/bolivar.jpg');
    var louverture=new Heroes('Toussaint louverture','img/louverture.jpg');
    var arevalo=new Heroes('Juan José Arevalo', 'img/arevalo.jpg');
    var arbenz=new Heroes('Jacobo Arbenz', 'img/arbenz.jpg');
    var sandino=new Heroes('Augusto César Sandino','img/sandino.jpg');
    var marti=new Heroes('Faribundo Martí','img/marti.jpg');
    var marti1=new Heroes('José Martí', 'img/marti1.jpg'); }
}

PhotoSelector();
console.log(choiceOne);

chooseOne.addEventListener('click', Voteone);
chooseTwo.addEventListener('click', Votetwo);
