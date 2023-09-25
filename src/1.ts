import { Normal, VIP, Camarote } from './class/classes';

const ingressoNormal = new Normal(50);
const ingressoVIP = new VIP(80, 20);
const ingressoCamarote = new Camarote(100, 50);

ingressoNormal.imprimeValor();
ingressoVIP.imprimeValor(); 
ingressoCamarote.imprimeValor();
