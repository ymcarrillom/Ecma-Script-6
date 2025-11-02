//arrays destructuring
let fruits = ['apple', 'banana']
let [a,b] = fruits
console.log(a,fruits[1])

// Object destructuring

let user = {username : 'oscar', age: 14}
let {username, age} = user
console.log(username, user.age)

//spread operator
let person = { name: 'yonatan', age: 28}
let country = 'MX'

let data = {...person, country}
console.log(data)

// rest

function sum (num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[2]
}

sum(1, 1, 3)