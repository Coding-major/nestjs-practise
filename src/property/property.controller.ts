import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return `this is number ${id}`
    }

    @Post()

    create() {
        return "created property"
    }
}
