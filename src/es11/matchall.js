//forma de generar filtros y reglas segun sea el caso
const regex = /\b(Apple)+\b/g

const fruit = 'Apple, banana, kiwi, mango, ete, etc'

for(const match of fruit.matchAll(regex)){
    console.log(match)
}