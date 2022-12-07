let person = {
    fname: "Reima",
    lname: "Riihimäki",
    age: 22
}

console.log( person.fname );

person.age = 23;

let persons = [];
persons.push(person);

person[0].age;

for (p of persons) {
    console.log(p.age);
}