import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id/:town")
    findOne(@Param() userId) {
        //since we did not put anything in the parametoer of @params it will take it as object that contain all params
        return `this is number ${userId.id} and ${userId.town}`
    }

    @Post()

    create() {
        return "created property"
    }
}
