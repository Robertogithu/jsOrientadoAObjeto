import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    
    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rose', 'rs@rs.com', '2023-05-15')
//console.log(novoAdmin.criarCurso('js', 20))