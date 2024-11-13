import { IsInt, IsString } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    name:string;
    @IsString()
    skul:string;
    @IsInt()
    area:number;
}