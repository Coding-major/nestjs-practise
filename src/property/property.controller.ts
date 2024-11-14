import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe, Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { idParamsDto } from './dto/idParams.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';

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
    // @HttpCode(201)
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(
        @Body() body: CreatePropertyZodDto,
    ) {
        const me = body.name
        console.log(typeof body.area);
        console.log(body);
        
        
        return `${body.skul}      ${me}`
    }

    @Patch(":id")
    update(
        @Param("id", ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators: true})) header: HeadersDto,
    ) {
        console.log(header);
        return header
    }

}