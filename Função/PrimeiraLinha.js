function fun1(){

}

const fun2 = function( ){

}

const array = [function(a,b){
    return a+b,
    fun1,
    fun2
}]

console.log([0],(2,3))

const obj = {}

obj.falar = function(){return 'Opa'}

console.log(obj.falar())

function run(fun){
    fun()
}

run(function(){ console.log('Exercutando...');})

function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }

}

soma(2, 3)(4)

const cincoMais = soma(4, 1)

cincoMais(5)