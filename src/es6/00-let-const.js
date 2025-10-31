//con var se puede reasignar un valor de una variable
var lastName = 'david';
lastName = 'oscar';
console.log(lastName);

//con let tambien podemos reasignar
let fruit = 'apple';
fruit = 'kiwi'
console.log(fruit)

//con const no podemos reasignar variables
const animal = 'dog';
animal = 'cat'
console.log(animal)

const fruits = () =>{
    if(true) {
        var fruit1 = 'apple' //function scope
        let fruit2 = 'kiwi' //block scope
        const fruit3 = 'banana' //block scope
    }
    console.log(fruit1)
    console.log(fruit2)
     console.log(fruit3)
}

fruits();