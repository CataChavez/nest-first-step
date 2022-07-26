// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsAlpha, MinLength } from "class-validator";

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {

// }

export class UpdateBrandDto{
    @IsAlpha()
    @MinLength(1)
    name: string;
}
