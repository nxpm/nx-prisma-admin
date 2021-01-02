import { Controller, Get, Param, Post } from '@nestjs/common'

@Controller('schema')
export class DynamicSchemaController {
  @Get(':name')
  schemaGet(@Param('name') name: string) {
    console.log({ name })
    return { name }
  }

  @Post(':name')
  schemaPost(@Param('name') name: string) {
    console.log({ name })
    return { name }
  }
}
