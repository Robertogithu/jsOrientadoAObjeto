const user = {
    nome: "Roberto",
    email: "r@r.com",
    nascimento: "2023/25/09",
    role: "estudante",
    ativo:true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
const admin = {
    nome:"Mariana",
    email:"m@m.com",
    role:"admim",
    criarCurso(){
        console.log('curso criado')
    }
}
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()