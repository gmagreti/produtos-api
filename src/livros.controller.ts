import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livros.model';
import { LivrosService } from './livros.service';

@Injectable()
@Controller('livros')
export class LivrosController {
  constructor(private livroService: LivrosService) {}

  produtos: Livro[] = [
    new Livro('LIV01', 'Livro TDD e BDD na pratica', 29.0),
    new Livro('LIV02', 'Livro de NestJs', 39.0),
    new Livro('LIV03', 'Livro React', 19.0),
    new Livro('LIV03', 'Livro Nextjs', 49.0),
  ];

  @Get()
  obterTodos(): Livro[] {
    return this.livroService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livroService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro) {
    this.livroService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livroService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livroService.apagar(params.id);
  }
}
