function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['yonatan', 'matias', 'samara', 'dayana', 'piedad', 'jose'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)