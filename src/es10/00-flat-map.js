//Flat: nos devuelve una matriz de una sub matriz
const array = [1,3,3,5,6,[1,5,7,8,[1,4,5,6]]]
console.log(array.flat(2))

//flatmap: mapea los elementos usando en una funcion de mapeo y aplana el resultado
const array2 =[1 , 3, ,5, 6]
console.log(array2.flatMap(v =>[v, v * 2] ))