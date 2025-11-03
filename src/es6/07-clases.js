//decñarando
class User {

}

//instancia de una clase
//const newUser = new User ();

class user {
    //metodos
    greeting(){
        return 'Hello'
    }
}

const gnx = new user()
console.log(gnx.greeting())
const developer = new user()
console.log(developer.greeting())

//constructor

class user {
    //constructor
    constructor(){
        console.log('nuevo usuario')
    }
     greeting(){
        return 'Hello'
    } 
}

const david = new user ();

// this = hace referencia al elemento padre que lo contiene

class user {
    constructor (name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const yonatan = new user('yonatan')
console.log(yonatan.greeting())

//setteres andd getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak(){
        return 'hello'
    }

    greeting (){
        return  `${this.speak()} ${this.name}`
    }

    get uAge (){
        return this.age;
    }
    set uAge (n){
        this.age = n
    }
}

const bebeloper = new user ('yonatan', 24)
console.log(bebeloper.uAge)
console.log(bebeloper.uAge = 56)