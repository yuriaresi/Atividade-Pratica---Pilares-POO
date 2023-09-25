export abstract class Ingresso {
    constructor(protected valor: number) {}
  
    abstract imprimeValor(): void;
  }
  
  export class Normal extends Ingresso {
    imprimeValor(): void {
      console.log(`Valor do ingresso Normal: R$ ${this.valor.toFixed(2)}`);
    }
  }
  
  export class VIP extends Ingresso {
    constructor(valor: number, private valorAdicional: number) {
      super(valor);
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso VIP: R$ ${valorTotal.toFixed(2)}`);
    }
  }
  
  export class Camarote extends Ingresso {
    constructor(valor: number, private valorAdicional: number) {
      super(valor);
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso Camarote: R$ ${valorTotal.toFixed(2)}`);
    }
  }

  class Imovel {
    constructor(private endereco: string, private preco: number) {}
  
    getEndereco(): string {
      return this.endereco;
    }
  
    getPreco(): number {
      return this.preco;
    }
  }
  
  export class Novo extends Imovel {
    constructor(endereco: string, preco: number, private adicional: number) {
      super(endereco, preco);
    }
  
    getAdicional(): number {
      return this.adicional;
    }
  
    imprimeValorAdicional(): void {
      console.log(`Valor adicional: R$ ${this.getAdicional().toFixed(2)}`);
    }
  }
  
 export class Velho extends Imovel {
    constructor(endereco: string, preco: number, private desconto: number) {
      super(endereco, preco);
    }
  
    getDesconto(): number {
      return this.desconto;
    }
  
    imprimeValorDesconto(): void {
      console.log(`Valor de desconto: R$ ${this.getDesconto().toFixed(2)}`);
    }
  }

  export class Animal {
    private nome: string;
    private tamanho: string;
  
    constructor(nome: string, tamanho: string) {
      this.nome = nome;
      this.tamanho = tamanho;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getTamanho(): string {
      return this.tamanho;
    }
  
    fazerBarulho(): void {
      console.log("O animal faz algum barulho.");
    }
  }
  
  export class Cachorro extends Animal {
    constructor(nome: string, tamanho: string) {
      super(nome, tamanho);
    }
  
    fazerBarulho(): void {
      console.log("O cachorro late.");
    }
  
    correr(): void {
      console.log("O cachorro está correndo.");
    }
  }
  
  export class Cavalo extends Animal {
    constructor(nome: string, tamanho: string) {
      super(nome, tamanho);
    }
  
    fazerBarulho(): void {
      console.log("O cavalo relincha.");
    }
  
    galopar(): void {
      console.log("O cavalo está galopando.");
    }
  }
  
 export class Gato extends Animal {
    constructor(nome: string, tamanho: string) {
      super(nome, tamanho);
    }
  
    fazerBarulho(): void {
      console.log("O gato mia.");
    }
  
    arranhar(): void {
      console.log("O gato está arranhando algo.");
    }
  }