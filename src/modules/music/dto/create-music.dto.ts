import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateMusicDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Dados inválidos. O campo "author" não pode estar vazio.',
  })
  @MaxLength(200, {
    message:
      'Dados inválidos. O número máximo de caracteres permitidos no campo "author" é 200',
  })
  author: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Dados inválidos. O campo "title" não pode estar vazio.',
  })
  @MaxLength(200, {
    message:
      'Dados inválidos. O número máximo de caracteres permitidos no campo "title" é 200',
  })
  title: string;

  @ApiProperty({
    example: 'Mais de ti\nMais de ti\n\nE menos de mim\nE menos de mim',
    description: 'String única. Linhas separadas por 1 "barra N". Paragrafos por 2 "barra N"'})
  @IsNotEmpty({
    message: 'Dados inválidos. O campo "letter" não pode estar vazio.',
  })
  letter: string;
}