//las funciones flecha (arrow function) nos van a permitir tener una alternativa a una funcion con parectesis y llaves
//es mas amigables para usar y se unsa palabras reservadas
// No tiene sus propios enlaces a this o super y no se debe usar como métodos.
// No tiene argumentos o palabras clave new.target.
// No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
// No se puede utilizar como constructor.
// No se puede utilizar yield dentro de su cuerpo

//funcion trsdicional

function square (num) {
   return  num * num
}

const square = (num) => {
   return num * num
}

//cuando hay un solo parametro podemos omitir los parentesis y los corchetes
const square = num => num * num