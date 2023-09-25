import { Novo, Velho } from "./class/classes";

const imovelNovo = new Novo('rua Andres Dalessandro ', 100000, 20000);
const imovelVelho = new Velho('rua Fernando Lucio', 80000, 10000);

console.log(`Endereço do Imóvel Novo: ${imovelNovo.getEndereco()}`);
console.log(`Preço do Imóvel Novo: R$ ${imovelNovo.getPreco().toFixed(2)}`);
imovelNovo.imprimeValorAdicional(); 

console.log(`Endereço do Imóvel Velho: ${imovelVelho.getEndereco()}`);
console.log(`Preço do Imóvel Velho: R$ ${imovelVelho.getPreco().toFixed(2)}`);
imovelVelho.imprimeValorDesconto(); 