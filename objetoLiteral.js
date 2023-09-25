const user = {
    nome: "Roberto",
    email: "r@r.com",
    nascimento: "2023/25/09",
    role: "admin",
    ativo:true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos();
//const exibir = user.exibirInfos;
//exibir()

const exibir = function (){
    console.log(this.nome, this.email, this.nascimento)
}
const exibirNome = exibir.bind(user)

exibirNome();
exibir();
