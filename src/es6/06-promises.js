const anotherFunction = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('heeeeyyyy') 
        }else {
            reject('whoooops')
        }
    } )
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err))