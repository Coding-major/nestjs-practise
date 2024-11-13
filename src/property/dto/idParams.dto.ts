import { IsInt, IsPositive, IsString } from "class-validator";

export class idParamsDto {
    @IsInt()
    @IsPositive()
    id:number
    
}