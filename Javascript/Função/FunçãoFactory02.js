function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('LGk7', 2199.99));
console.log(criarProduto('iPad', 1199.99));