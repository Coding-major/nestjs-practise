import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id/:town")
    findOne(@Param("id") userId, @Param() user) {
        return `this is number ${userId} and ${user.id}`
    }

    @Post()

    create() {
        return "created property"
    }
}
