export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome (){
       //lógica de condição

        return this.#nome
    }
    get email (){
        //lógica de condição
 
         return this.#email
     }
     get nascimento (){
        //lógica de condição
 
         return this.#nascimento
     }
     get role (){
        //lógica de condição
 
         return this.#role
     }
     get ativo (){
        //lógica de condição
 
         return this.#ativo
     }
     
     set nome(novoNome){
        if(novoNome === ''){
            throw new Error('formato não é válido')
        }
        this.#nome = novoNome
     }
       exibirInfos(){
        
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}

