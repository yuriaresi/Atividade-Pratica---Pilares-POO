import { Cachorro, Cavalo, Gato} from "./class/classes"


const cachorro = new Cachorro("bruce", "pequeno");
const cavalo = new Cavalo("pocotó", "grande");
const gato = new Gato("gnar", "medio");

console.log(`Nome do cachorro: ${cachorro.getNome()}`);
console.log(`Tamanho do cachorro: ${cachorro.getTamanho()}`);
cachorro.fazerBarulho();
cachorro.correr();

console.log(`Nome do cavalo: ${cavalo.getNome()}`);
console.log(`Tamanho do cavalo: ${cavalo.getTamanho()}`);
cavalo.fazerBarulho();
cavalo.galopar();

console.log(`Nome do gato: ${gato.getNome()}`);
console.log(`Tamanho do gato: ${gato.getTamanho()}`);
gato.fazerBarulho();
gato.arranhar();