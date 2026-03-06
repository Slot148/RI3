export default class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    addTel(tel) {
        this.telefones.add(tel);
    }
    addCli(clientes) {
        this.clientes.add(clientes);
    }

    get getCNPJ() {
        return this.#cnpj;
    }
    set setCNPJ(cnpj) {
        this.#cnpj = cnpj;
    }

    descricao() {
        let telefonesDesc = "";
        for (let tel of this.telefones) {
            telefonesDesc += tel.descricao();
        }

        let clientesDesc = "";
        for (let cliente of this.clientes) {
            clientesDesc += cliente.descricao() + "\n";
        }

        return `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n\n--------------------\nClientes:\n${clientesDesc}`;
    }

    get lowerRazaoSocial() {
        return this.razaoSocial.toLowerCase();
    }
    get lowerNomeFantasia() {
        return this.nomeFantasia.toLowerCase();
    }
    get upperRazaoSocial() {
        return this.razaoSocial.toUpperCase();
    }
    get upperNomeFantasia() {
        return this.nomeFantasia.toUpperCase();
    }
}