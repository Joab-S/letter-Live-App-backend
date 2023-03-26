import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateConnectionDto {
  @ApiProperty({
    example: 'Mais de ti\nMais de ti\n\nE menos de mim\nE menos de mim',
    description: 'String única. Linhas separadas por 1 "barra N". Paragrafos por 2 "barra N"'})
  @IsNotEmpty({
    message: 'Dados inválidos. O campo "message" não pode estar vazio.',
  })
  message: string;
}