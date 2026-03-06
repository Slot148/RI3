export default class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    addTel(tel) {
        this.telefones.add(tel);
    }

    get lowerNome() {
        return this.nome.toLowerCase();
    }
    get upperNome() {
        return this.nome.toUpperCase();
    }
    get lowerEndereco() {
        return this.endereco.toLowerCase();
    }
    get upperEndereco() {
        return this.endereco.toUpperCase();
    }


    get getCPF() {
        return this.#cpf;
    }
    set setCPF(cpf) {
        this.#cpf = cpf;
    }

    descricao() {
        let telefonesDesc = "";
        for (let tel of this.telefones) {
            telefonesDesc += tel.descricao();
        }
        return `Nome: ${this.nome}\n${this.endereco.descricao()}\n${telefonesDesc}`;
    }
}