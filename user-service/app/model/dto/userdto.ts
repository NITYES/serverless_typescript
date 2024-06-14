import { IsEmail, Length } from 'class-validator';

export class LoginInput {
  @Length(10, 13)
  phone: string;
}

export class Signup extends LoginInput {
  @IsEmail()
  email: string;
  @Length(6, 20)
  password: string;
}
