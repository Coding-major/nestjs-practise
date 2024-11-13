import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { idParamsDto } from './dto/idParams.dto';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id/:town")
    findOne(@Param("id", ParseIntPipe) userId, @Param("town") town, @Query("sort", ParseBoolPipe) sort) {
        console.log( typeof userId);
        console.log(typeof sort)
        
        return `this is number ${userId} and ${town}`
    }

    @Post()
    @HttpCode(201)
    create(
        @Body() body: CreatePropertyDto,
        @Body("skul") skul
    ) {
        const me = body.name
        console.log(typeof body.area);
        console.log(body);
        
        
        return `${body.skul}     ${skul}   ${me}`
    }

    @Patch(":id")
    update(
        @Param() { id }: idParamsDto,
        @Body("name") body
    ) {
        
        return `${body} ${id}`
    }

}