import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id/:town")
    findOne(@Param("id") userId, @Param("town") town) {
        return `this is number ${userId} and ${town}`
    }

    @Post()

    create(@Body() body, @Body("skul") skul) {
        const me = body.name
        return `${body.skul}     ${skul}   ${me}`
    }
}
