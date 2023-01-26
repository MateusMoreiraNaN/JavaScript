function Pessoa(nome){
    this.nome = () =>{
        this.nome = nome
    }

    this.falar = ()=>{
        return `Meu nome é ${nome}`
    }

}

const p1 = new Pessoa('Mateus')

console.log(p1.falar());

const p2 = new Pessoa('Pedro')

console.log(p2.falar());