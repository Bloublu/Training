let pierre = document.querySelector('#Pierre');
let feuille = document.querySelector('#Feuille');
let ciseau = document.querySelector('#Ciseau');
var results = document.querySelector('#results');
var picturesUser = document.querySelector('#pictureUser');
var picturesFleche = document.querySelector('#pictureFleche');
var picturesOrdi = document.querySelector('#pictureOrdi');
let rejouer = document.querySelector('#boutonRejouer');
rejouer.style.display ='none';
let choixUser;

// creation de ma lste de choix et random pour choix de l'ordinateur
let maListe = new Array();
maListe = ['Pierre', 'Feuille', 'Ciseaux'];
let choix = Math.floor(Math.random()*maListe.length);
var choixOrdi = maListe[choix];
console.log(choixOrdi);

// fonction qui est appeler a la fin de resultat() et qui permet d'arreter le clic sur les autres choix du chifoumi
function handler(){
    pierre.removeEventListener('click', evenPierre);
    feuille.removeEventListener('click', evenFeuille);
    ciseau.removeEventListener('click', evenCiseau);
}

// fonction qui recuperer choix de l'ordi et user pour voir qui a gagné.
function resultat(choixOrdi, choixUser){
    
    let instruction = document.createElement('div');
    let pictureUser = document.createElement('div');
    let pictureFleche = document.createElement('div');
    let pictureOrdi = document.createElement('div');
    if(choixUser == maListe[0]){
        if(choixOrdi == maListe[0]){
            instruction.textContent = "EGALITE !!";
            pictureUser.innerHTML ="<p>Vous : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent = "PERDU !!";
            pictureUser.innerHTML ="<p>Vous : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent = "C\'est GAGNE !!";
            pictureUser.innerHTML ="<p>Vous : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
    }
    if(choixUser == maListe[1]){
        if(choixOrdi == maListe[0]){
            instruction.textContent =' C\'est GAGNE !! ';
            picturesUser.innerHTML ="<p>Vous : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent =' EGALITE !! ';
            picturesUser.innerHTML ="<p>Vous : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent =' Vous avez PERDU !! ';
            picturesUser.innerHTML ="<p>Vous : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
    }
    if(choixUser == maListe[2]){
        if(choixOrdi == maListe[0]){
            instruction.textContent =' Vous avez PERDU !! ';
            pictureUser.innerHTML ="<p>Vous : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Pierre' src='./images/pierre.png' alt='Pierre' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[1]){
            instruction.textContent =' C\'est GAGNE !! ';
            pictureUser.innerHTML ="<p>Vous : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Feuille' src='./images/feuille.png' alt='Feuille' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
        if(choixOrdi == maListe[2]){
            instruction.textContent =' EGALITE !! ';
            pictureUser.innerHTML ="<p>Vous : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            pictureFleche.innerHTML = "<img id='Fleche' src='./images/fleche.png' alt='Fleche' style='width: 30px;'>"
            pictureOrdi.innerHTML ="<p>Adversaire : </p><img id='Ciseau' src='./images/ciseau.png' alt='Ciseau' style='width: 100px;'>";
            picturesUser.prepend(pictureUser);
            picturesFleche.prepend(pictureFleche);
            picturesOrdi.prepend(pictureOrdi);
        }
    }
    results.prepend(instruction);
    console.log(choixUser);
    handler();
    rejouer.style.display ='inline';

};

pierre.addEventListener('click', evenPierre);
function evenPierre(){
    pierre.style.border = '0.5rem solid darkturquoise';
    choixUser = maListe[0];
    resultat(choixOrdi, choixUser);
};
feuille.addEventListener('click', evenFeuille);
function evenFeuille(){
    feuille.style.border = '0.5rem solid darkturquoise';
    choixUser = maListe[1];
    resultat(choixOrdi, choixUser);
};
ciseau.addEventListener('click', evenCiseau);
function evenCiseau(){
    ciseau.style.border = '0.5rem solid darkturquoise';
    choixUser = maListe[2];
    resultat(choixOrdi, choixUser);
};
