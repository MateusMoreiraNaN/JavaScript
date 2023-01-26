class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar()

const p2 = new Pessoa('Mateus')
p2.falar()

const cliente = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = cliente('Pedro')
p3.falar()