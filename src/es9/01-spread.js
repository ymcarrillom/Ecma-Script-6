const user = {username: 'yonatan', age: 39, country: 'CO'}

const {username, ...values} = user;
console.log(username)
console.log(values)