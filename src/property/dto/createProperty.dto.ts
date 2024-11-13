import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(4, 8, {groups: ["createw"]})
    name:string;
    @IsString()
    skul:string;
    @IsInt()
    @IsPositive()
    area:number;
}