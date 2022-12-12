//Luo tähän taulukko käyttäjiä varten.
let users = [];
document.getElementById("submit_button").addEventListener('click', submitUser);

let form = document.querySelector("form");

/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan

    let formData = new FormData(form);
 //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon

    let uname = formData.get("uname")
    let password =formData.get("pw")

    let user = {
        username: uname,
        password: pw
    }
    users.push(user)
   
    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.
    console.log("----------");
    for (const user of users){
        console.log(user.username);
    }
}