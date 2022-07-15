// var last_name = normalise(fd_data._2__get_catalog_variables.name_contact);
// var first_name = normalise(fd_data._2__get_catalog_variables.first_name_contact);
// return fd_data._2__get_catalog_variables.name_id + last_name + first_name;

// pour moi le pb est qu'on appel 2 fois la methode avec une var a chaque fois, et du coup
// il nous cree un espace sur notre chaine entre chaque appel.... PB sur return

    // var last_name = fd_data._2__get_catalog_variables.name_contact;
    // var first_name = fd_data._2__get_catalog_variables.first_name_contact;
    // return fd_data._2__get_catalog_variables.name_id + normalise(last_name, first_name);

function normalise (str, rts) {
    return (str + rts)
        .toString()  
        .toUpperCase()                      
        .normalize('NFD')                   // Canonical Decomposition // COMPRENDS PAS ?? 
        .replace(/[\u0300-\u036f]/g, "")    // Remove diacritics
        .replace(/\s/g,"")                  // Strip spaces
        .replace(/[^a-zA-Z0-9-]+/g,"")      // Strip all non-word characters except -
        ;
}

let id = 2345345;
let prenom = 'Odile';
let nom = 'Crocs';
console.log(id + normalise(prenom, nom));