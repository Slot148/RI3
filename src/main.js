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

console.log(empresa.descricao())