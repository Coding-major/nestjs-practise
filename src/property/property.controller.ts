import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()

    findAll() {
        return "All properties"
    }

    @Get(":id")
    findOne(@Param("id") userId: string) {
        return `this is number ${userId}`
    }

    @Post()

    create() {
        return "created property"
    }
}
