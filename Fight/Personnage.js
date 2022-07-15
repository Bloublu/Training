class Personnage{

    constructor(speudo, classe, sante, attaque){
        this.speudo     =   speudo;
        this.classe     =   classe;
        this.sante      =   sante;
        this.attaque    =   attaque;
        this.niveau     =   1;
    }

    evoler(){
        this.niveau++;
        console.log( this.speudo + " passe au niveau " + this.niveau);
    }

    verifierSante(){
        if(this.sante <= 0){
            this.sante = 0;
            console.log(this.speudo + " a perdu !")
        }
    }

    get information(){
        return this.speudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }

}

class Magicien extends Personnage{

    constructor(speudo){
        super(speudo, "Magicien", 170, 90);
    }

    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque;
        console.log(this.speudo + " attaque " + Personnage.speudo + " en lancant un sort (" + this.attaque + " dégâts).");
        this.evoler();
        Personnage.verifierSante();
    }
    
    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        console.log(this.speudo + " attaque avec son coup spécial puissance des arcanes " + Personnage.speudo + " (" + this.attaque * 5 + " dégâts).");
        this.evoler();
        Personnage.verifierSante();
    }
}

class Guerrier extends Personnage{

    constructor(speudo){
        super(speudo, "Guerrier", 350, 50);
    }

    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque;
        console.log(this.speudo + " attaque " + Personnage.speudo + " avec son épée (" + this.attaque + " dégâts).");
        this.evoler();
        Personnage.verifierSante();
    }
    
    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        console.log(this.speudo + " attaque avec son coup spécial haches de guerre " + Personnage.speudo + " (" + this.attaque * 5 + " dégâts).");
        this.evoler();
        Personnage.verifierSante();
    }
}


var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.information);
console.log(gandalf.information);
gandalf.attaquer(thor);
console.log(thor.information);
thor.attaquer(gandalf);
console.log(gandalf.information);
gandalf.coupSpecial(thor);




