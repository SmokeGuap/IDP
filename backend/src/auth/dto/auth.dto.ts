import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class AuthDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString({
    message: "Почта обязательна",
  })
  @IsEmail()
  email: string;

  @MinLength(4, {
    message: "Пароль должен содержать не менее 4 символов",
  })
  @IsString({
    message: "Пароль обязателен",
  })
  password: string;
}
