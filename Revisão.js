// var lista = ["Calabresa","Marguerita","Quatro queijos","Portuguesa","Milho com bacon"]
// console.log (lista.length)

// for of: me retorna o conteudo (valor) de cada um dos itens dentro do objeto passado
// vai ser repetido a quantidade de vezes necessária para percorrer todos os objetos da lista passada
// for (let i of lista){
//     console.log("repetiu")
// }
// for (let i of lista){
//     console.log(i);
// } 

//// for in : me retorna o indice de cada um dos itens dentro do objeto passado com

// for (let i in lista){
//     console.log(i);
// }

// var lista = [1,2,3,4,5,6]

// function somar(){
//     let soma = 0
//     for (let i in lista){
//         console.log(i);
//         soma += lista[i]
//     }
//     return soma
// }
// console.log(somar(lista))

var lista = [1,2,3,4,5,6]

function somar(){
    let soma = 0
    for (let i of lista){
        
        soma += i
    }
    return soma
}
console.log(somar(lista))


