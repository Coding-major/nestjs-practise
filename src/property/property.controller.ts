import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

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
    //@UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) //whitelist is used to remove unvalidated input from the body
    create(
        @Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true, groups: ["createw"], always:true})) body: CreatePropertyDto,
        @Body("skul") skul
    ) {
        const me = body.name
        console.log(typeof body.area);
        console.log(body);
        
        
        return `${body.skul}     ${skul}   ${me}`
    }
}
