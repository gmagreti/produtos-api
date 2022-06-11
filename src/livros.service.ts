import { Livro } from './livros.model';

export class LivrosService {
  produtos: Livro[] = [
    new Livro('LIV01', 'Livro TDD e BDD na pratica', 29.0),
    new Livro('LIV02', 'Livro de NestJs', 39.0),
    new Livro('LIV03', 'Livro React', 19.0),
    new Livro('LIV03', 'Livro Nextjs', 49.0),
  ];

  obterTodos(): Livro[] {
    return this.produtos;
  }

  obterUm(id: number): Livro {
    return this.produtos[0];
  }

  criar(livro: Livro) {
    this.produtos.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
