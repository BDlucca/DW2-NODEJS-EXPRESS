//ARRAYS (VETOR OU LISTA)
let produtos = []
console.log(typeof(produtos))

let Produtos = ["computador", "notbook", "celular", "tablet"]
console.log(Produtos)

console.log("Exibindo a lista pelos os indicies...")
console.log(Produtos[0])
console.log(`1 - ${Produtos[1]}`)
console.log(Produtos[2])
console.log(Produtos[3])

console.log("Exibindo a lista atraves do FOR....")
for (let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo a lista atraves do foreach...")
Produtos.forEach(function (produtos) {
    console.log(produtos)
})

console.log("Exibindo a lista atraves do foreach com os indices...")
Produtos.forEach((produtos, 1) => {
    console.log(`${i+1} - ${produtos}`)
})


    