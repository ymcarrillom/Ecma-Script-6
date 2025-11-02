//arrays destructuring
let fruits = ['apple', 'banana']
let [a,b] = fruits
console.log(a,fruits[1])

// Object destructuring

let user = {username : 'oscar', age: 14}
let {username, age} = user
console.log(username, user.age)