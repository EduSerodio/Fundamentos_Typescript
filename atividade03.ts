interface Produto {

    id: number,
    nome: string,
    preco: number,
    quantidade: number
}


let produto01: Produto = {
    id: 1,
    nome: "celular",
    preco: 2500,
    quantidade: 2
}

let produto02: Produto = {
    id: 2,
    nome: "Notebok",
    preco: 5000,
    quantidade: 1
}

let  listaProdutos : Array<Produto> = [produto01, produto02];

console.log(...listaProdutos)