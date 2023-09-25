import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"


const novoUser = new User('Maria', 'm@m.com', '2012-01-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('rodrigo', 'r@r.com', '2021-15-05')
console.log(novoAdmin.nome)

const novoDocente = new Docente ('Guilherme', 'g@g.com', '2000-05-15')
console.log(novoDocente.exibirInfos())