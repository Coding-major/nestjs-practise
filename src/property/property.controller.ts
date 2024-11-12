import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';

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
    create(@Body() body, @Body("skul") skul) {
        const me = body.name
        return `${body.skul}     ${skul}   ${me}`
    }
}
