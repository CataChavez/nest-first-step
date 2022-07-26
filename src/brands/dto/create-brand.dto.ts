import { IsAlpha, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsAlpha()
    @MinLength(1)
    name: string;
}
