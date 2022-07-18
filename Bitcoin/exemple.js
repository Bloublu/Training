const url = 'https://blockchain.info/ticker';

// function pour actualiser tte les 5 sec
function recupPx () {  

    // créer une requete
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    // On recupere la reponse API
    requete.onload = function(){
        if (requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                let prixEnEuro = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuro;

            }
            else{
                alert('Un probleme est intervenu, revenez plus tard !');
            }
        }
    }
}
setInterval(recupPx, 5000);