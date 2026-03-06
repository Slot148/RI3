export default class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    descricao() {
        return `ddd: ${this.ddd} Numero: ${this.numero}\n`
    }
}