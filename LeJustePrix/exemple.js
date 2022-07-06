let input        = document.querySelector('#prix');
let error        = document.querySelector('small');
let formulaire   = document.querySelector('#formulaire');

error.style.display ='none';

let nbAleatoire = Math.floor(Math.random() * 1001);

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display ='inline';
    }else {
        error.style.display ='none';
    }
});