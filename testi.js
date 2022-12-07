let numerot = [3,6,4,7,8];

for (num of numerot) {
    console.log(num);
}


numerot.forEach(tool);
function tool(num){
    console.log(num);
}

numerot.forEach(function(num){
    console.log(num);
    console.log("Toinen rivi");
});

numerot.forEach( num => {
    console.log(num);
    console.log("toinen rivi");
} );


let uusiTaulu = numerot.map(function(num){
    return num+1;
});

//Lisää jokaiseen numerot-taulun arvoon 1 ja tallettaa arvot uuteen tauluun
let uusiTaulu2 = numerot.map(num => num+1 );

let isotNumerot = numerot.filter(num => num>5);

console.log("-------------------------------------");

for (n of isotNumerot) {
    console.log(n);
}
