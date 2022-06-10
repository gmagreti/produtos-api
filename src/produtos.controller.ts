import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na pratica', 29.0),
    new Produto('LIV02', 'Livro de NestJs', 39.0),
    new Produto('LIV03', 'Livro React', 19.0),
    new Produto('LIV03', 'Livro Nextjs', 49.0),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 1000;
    this.produtos.push(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtos.pop();
  }
}
