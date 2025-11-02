function newUser (name, age, country) {
    var name = name || 'yonatan'
    var age = age || '40'
    var country = country || 'CO'
    console.log( name, age, country)
}
new newUser()
newUser('matias', 11, 'MEX')

//new paramas with fefault paramss

function newAdmin (name = 'oscar', age = 40, country = 'CL') {
    console.log(name, age, country)
}
newAdmin()
newAdmin('matias', 11, 'COL')