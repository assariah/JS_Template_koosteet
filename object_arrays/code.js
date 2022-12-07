//Luo tähän taulukko käyttäjiä varten.

document.getElementById("submit_button").addEventListener('click', submitUser);

let form = document.querySelector("form");

/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan

    let formData = new FormData(form);

    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon

    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.
}