async function* anotherGenerator(params) {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    
}

const other = anotherGenerator()
other.next().then(Response=> console.log(Response.value))
other.next().then(Response=> console.log(Response.value))
other.next().then(Response=> console.log(Response.value))
console.log('hello')

async function arrayOfName(array) {
    for await (let value of array){
        console.log(value)
    }
}

const name = arrayOfName(['yonatan', 'manuel', 'maria'])
console.log('after')