function Carro(velocMaxima = 200, delta = 5){
    let velocAtual = 0

    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocMaxima){
            velocAtual += delta
        }else{
            velocAtual = velocMaxima
        }
    }

    this.getVelocAtual = () => {
        return velocAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocAtual());