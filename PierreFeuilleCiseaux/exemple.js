let pierre = document.querySelector('#Pierre');
let feuille = document.querySelector('#Feuille');
let ciseau = document.querySelector('#Ciseau');
var results = document.querySelector('#results');
let choixUser;

// creation de ma lste de choix et random pour choix de l'ordinateur
let maListe = new Array();
maListe = ['Pierre', 'Feuille', 'Ciseaux'];
let choix = Math.floor(Math.random()*maListe.length);
var choixOrdi = maListe[choix];
console.log(choixOrdi);

// fonction qui recuperer choix de l'ordi et user pour voir qui a gagné.
function resultat(choixOrdi, choixUser){
    
    let instruction = document.createElement('div');
    if(choixUser == maListe[0]){
        if(choixOrdi == maListe[0]){
            instruction.textContent = "EGALITE !! Vous avez choisi " + choixUser + " Votre adversaire a choisi " + choixOrdi;
            
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent = " Vous avez PERDU !! Vous avez choisi " + choixUser + " Votre adversaire a choisi " + choixOrdi;
            
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent = "C\'est GAGNE !! Vous avez choisi " + choixUser + " Votre adversaire a choisi " + choixOrdi;
            
        }
    }
    if(choixUser == maListe[1]){
        if(choixOrdi == maListe[0]){
            instruction.textContent =' C\'est GAGNE !! ';
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent =' EGALITE !! ';
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent =' Vous avez PERDU !! ';
        }
    }
    if(choixUser == maListe[2]){
        if(choixOrdi == maListe[0]){
            instruction.textContent =' Vous avez PERDU !! ';
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent =' C\'est GAGNE !! ';
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent =' EGALITE !! ';
        }
    }
    results.prepend(instruction);
    console.log(choixUser);
};

pierre.addEventListener('click', () =>{
    pierre.style.border = '1rem solid red';
    choixUser = maListe[0];
    resultat(choixOrdi, choixUser);
});
feuille.addEventListener('click', () =>{
    feuille.style.border = '1rem solid red';
    choixUser = maListe[1];
    resultat(choixOrdi, choixUser);
});
ciseau.addEventListener('click', () =>{
    ciseau.style.border = '1rem solid red';
    choixUser = maListe[2];
    resultat(choixOrdi, choixUser);
});