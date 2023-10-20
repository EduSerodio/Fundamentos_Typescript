interface Usuario{

    id: number,
    nome : string,
    idade: number,
    email: string,
    senha: string
}

console.log("Sejam bem vindos em nossa rede social: \n")

let usuario01: Usuario = {
    id: 1,
    nome: "Eduardo",
    idade: 23,
    email: "eduardo.serodio@outlook.com",
    senha: "admin010203"
}

console.log(usuario01 )

let usuario02: Usuario = {
    id: 2,
    nome: "Katlyn",
    idade: 25,
    email: "Katlyn@outlook.com",
    senha: "admin030201"
}

console.log(usuario02)