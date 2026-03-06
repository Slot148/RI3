export default class Endereco {
    constructor(estado, cidade, rua, num) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.num = num;
    }
    descricao() {
        return `EStado: ${this.estado} Cidade: ${this.cidade} Rua: ${this.rua} Numero: ${this.num}`
    }
    get lowerEstado() {
        return this.estado.toLowerCase();
    }
    get upperEstado() {
        return this.estado.toUpperCase();
    }
    get lowerCidade() {
        return this.cidade.toLowerCase();
    }
    get upperCidade() {
        return this.cidade.toUpperCase();
    }
    get lowerRua() {
        return this.rua.toLowerCase();
    }
    get upperRua() {
        return this.rua.toUpperCase();
    }
}