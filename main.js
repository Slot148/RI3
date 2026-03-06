class Cliente {
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

class Empresa {
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

class Endereco {
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

export default class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    descricao() {
        return `ddd: ${this.ddd} Numero: ${this.numero}\n`
    }
}

import Endereco from './classes/Endereco.js';
import Empresa from './classes/Empresa.js';
import Telefone from './classes/Telefone.js';
import Cliente from './classes/Cliente.js';

let endereco = new Endereco('SP', 'São Paulo', 'Av. Luis', '123');
let empresa = new Empresa("sla ltda", "sla", "xxxxxxxxxx-xx", endereco);

let telefoneEmpresa = new Telefone("1", "99999999999");
let telefoneEmpresa2 = new Telefone("1", "99999999999");
empresa.addTel(telefoneEmpresa);
empresa.addTel(telefoneEmpresa2);

let Telefone1 = new Telefone("12", "3729146129464");
let Telefone2 = new Telefone("23", "2343423567234");
let Telefone3 = new Telefone("34", "37292312466423");
let Telefone4 = new Telefone("5", "15426832449464");
let Telefone5 = new Telefone("12", "9083874397464");
let Telefone6 = new Telefone("66", "3729222229464");
let Telefone7 = new Telefone("36", "23434324234");
let Telefone8 = new Telefone("16", "372123241466423");
let Telefone9 = new Telefone("90", "23154651449464");
let Telefone10 = new Telefone("43", "2131231397464");

let cliente1 = new Cliente("CArlos", "xxxxxxxx-xx", new Endereco("SP", "São José", "Av. Luis ANtonio", "768"))
cliente1.addTel(Telefone1);
cliente1.addTel(Telefone2);

let cliente2 = new Cliente("Luiz", "xxxxxxxx-xx", new Endereco("SP", "São José", "Av. Luis ANtonio", "732"))
cliente2.addTel(Telefone3);
cliente2.addTel(Telefone4);

let cliente3 = new Cliente("Ana", "xxxxxxxx-xx", new Endereco("SP", "São José", "Av. Luis ANtonio", "4556"))
cliente3.addTel(Telefone5);
cliente3.addTel(Telefone6);

let cliente4 = new Cliente("MAria", "xxxxxxxx-xx", new Endereco("SP", "São José", "Av. Luis ANtonio", "123"))
cliente4.addTel(Telefone7);
cliente4.addTel(Telefone8);

let cliente5 = new Cliente("Júlia", "xxxxxxxx-xx", new Endereco("SP", "São José", "Av. Luis ANtonio", "304"))
cliente5.addTel(Telefone9);
cliente5.addTel(Telefone10);

empresa.addCli(cliente1);
empresa.addCli(cliente2);
empresa.addCli(cliente3);
empresa.addCli(cliente4);
empresa.addCli(cliente5);

console.log(empresa.descricao());