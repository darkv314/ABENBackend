import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
