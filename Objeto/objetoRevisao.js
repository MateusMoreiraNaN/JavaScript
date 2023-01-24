const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'

produto.preco = 220
produto.sobre = 'Loja'
console.log(produto);

delete produto.sobre
console.log(produto);
console.log(' ');

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            Rua: 'ABC',
            idade: 457, 
        }
    },
    condutores:[{
        nome: 'Pedro',
        idade: 20
    },{
        nome: 'Ana',
        idade: 12
    }]
}

carro.proprietario.endereco.numero = 900
carro['proprietario']['endereco']['rua'] = 'João'

console.log(carro);
console.log(carro.condutores.length);
