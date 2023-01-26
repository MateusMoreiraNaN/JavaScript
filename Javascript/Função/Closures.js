// closure é o eescopo criado quando uma função e declarada
// esse escopo permite a função acessar eee manipular variaveis externas á função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao);