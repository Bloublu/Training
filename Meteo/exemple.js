let villeChoisie = "Nantes";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=ad42a6fa6bf3e652cef61e0e3b28bc76&units=metric';

    // créer une requete
    let requete = new XMLHttpRequest();
    requete.open('POST', url);
    requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requete.responseType = 'json';
    requete.send();

    // On recupere la reponse API
    requete.onload = function(){
        if (requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                // console.log(temperature);
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;

            }
            else{
                alert('Un probleme est intervenu, revenez plus tard !');
            }
        }
    }
}