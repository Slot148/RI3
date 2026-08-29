class Cliente{
	#cpf
	constructor(nome, cpf, endereco){
		this.nome = nome
		this.endereco = endereco
		this.telefones = new Set()
		this.#cpf = cpf
	}

	get cpf(){
		return this.#cpf
	}

	set cpf(cpf){
		this.#cpf = cpf
	}


	adicionarTelefone(telefone) {
		this.telefones.add(telefone)
	}

	listarTelefones() {
		return Array.from(this.telefones).map(t => `(${t.ddd}) ${t.num}`)
	}
}

class Telefone {
	constructor(ddd, num){
		this.ddd = ddd
		this.num = num
	}
}

class Endereco {
	constructor(estado, cidade, rua, numero){
		this.estado = estado
		this.cidade = cidade
		this.rua = rua
		this.numero = numero
	}
}

class Empresa {
	#cnpj
	constructor(razao, nome, cnpj, endereco){
		this.razao = razao
		this.nome = nome
		this.#cnpj = cnpj
		this.endereco = endereco
		this.clientes = new Set()
		this.telefones = new Set()
	}

	get cnpj(){
		return this.#cnpj
	}

	set cnpj(cnpj){
		this.#cnpj = cnpj
	}

	adicionarTelefone(telefone) {
		this.telefones.add(telefone)
	}

	listarTelefones() {
		return Array.from(this.telefones).map(t => `(${t.ddd}) ${t.num}`)
	}

	adicionarCliente(cliente) {
		this.clientes.add(cliente)
	}

	detalhe(){
		let clientesStr = ""
		// let contador = 1
		for (let cliente of this.clientes) {
			clientesStr += "Nome: " + cliente.nome + "\n" +
			"Estado: " + cliente.endereco.estado + " cidade: " + cliente.endereco.cidade + " rua: " + cliente.endereco.rua + " numero: " + cliente.endereco.numero + "\n"
			for (let tel of cliente.telefones) {
				clientesStr += "  ddd" + ": " + tel.ddd + " numero" + ": " + tel.num + "\n"
			}
			clientesStr += "\n"
		}

		let telefonesStr = ""
		let i = 1
		for (let tel of this.telefones) {
			telefonesStr += "ddd" + i + ": " + tel.ddd + " numero" + i + ": " + tel.num + "\n"
			i++
		}

		return "---------------------" + "\n" +
		"Razao Social: " + this.razao + "\n" +
		"Nome Fantasia: " + this.nome + "\n" +
		"---------------------" + "\n" +
		"Endereco Empresa:" + "\n" +
		"Estado: " + this.endereco.estado + " cidade: " + this.endereco.cidade + " rua: " + this.endereco.rua + " numero: " + this.endereco.numero + "\n" +
		"Telefones Empresa:" + "\n" +
		telefonesStr +
		"---------------------" + "\n" +
		clientesStr +
		"---------------------"
	}
}

const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Paulista', '1000')
const empresa = new Empresa( 'Tech Solutions Ltda', 'Tech Solutions', '12.345.678/0001-90', enderecoEmpresa)

const tel1 = new Telefone('11', '98765-4321')
const tel2 = new Telefone('11', '3456-7890')

empresa.adicionarTelefone(tel1)
empresa.adicionarTelefone(tel2)

const enderecoCliente1 = new Endereco( 'RJ', 'Rio de Janeiro', 'Rua das Flores', '200')
const enderecoCliente2 = new Endereco( 'SP', 'São Paulo', 'Rua das Flores', '200')

const cliente1 = new Cliente('João Silva', '123.456.789-00', enderecoCliente1)
const cliente2 = new Cliente('Maria Oliveira', '987.654.321-00', enderecoCliente2)

cliente1.adicionarTelefone(new Telefone('21', '98765-4321'))
cliente1.adicionarTelefone(new Telefone('21', '3456-7890'))

cliente2.adicionarTelefone(new Telefone('21', '98765-4321'))
cliente2.adicionarTelefone(new Telefone('21', '3456-7890'))

empresa.adicionarCliente(cliente1)
empresa.adicionarCliente(cliente2)

console.log(empresa.detalhe())
