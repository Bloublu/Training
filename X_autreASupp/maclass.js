class Animal{
    constructor(nbpatte, poids){
        this.nbpatte = nbpatte;
        this.poids = poids;
    }
    presentation(){
        console.log("cet animal possede " + this.nbpatte + " pattes et fait " + this.poids + " kg.");
    }
}

let tortue = new Animal(4, 12);
tortue.presentation();

class Oiseau extends Animal{
    constructor(nbpatte, poids, longAiles){
        super(nbpatte, poids);
        this.longAiles = longAiles;
    }
    voler(){
        console.log("cet animal possede " + this.nbpatte + " pattes et fait " + this.poids + " kg. Mais en plus je vole car je suis un oiseau et j'ai de " + this.longAiles + " ailes.");
    }
}
let perroquet = new Oiseau(2, 1, 'grandes');
perroquet.voler();
perroquet.presentation();