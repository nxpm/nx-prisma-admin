import { Injectable, MiddlewareConsumer, Module, NestMiddleware, NestModule, NotFoundException } from '@nestjs/common'
import { ApiCoreDataAccessModule, ApiCoreDataAccessService } from '@nx-prisma-admin/api/core/data-access'
import { NextFunction, Request, Response } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { DynamicSchemaController } from './dynamic-schema.controller'

@Module({
  imports: [ApiCoreDataAccessModule],
  controllers: [DynamicSchemaController],
})
export class DynamicSchemaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DynamicSchemaMiddleware).forRoutes(DynamicSchemaController)
  }
}

@Injectable()
export class DynamicSchemaMiddleware implements NestMiddleware {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.params.name.includes('.map')) {
      return next()
    }
    // Get the schema from the backend
    const schemaRaw = await this.data.getSchema(req.params.name)

    // Get the resolver handling this schema
    const resolver = await this.data.getResolver(req.params.name)

    if (!schemaRaw) {
      console.log(`Can't find schema :(`)
      return next(new NotFoundException(`Can't find schema ${req.params.name}`))
    }

    if (!resolver) {
      console.log(`Can't find resolver :(`)
      return next(new NotFoundException(`Can't find resolver ${req.params.name}`))
    }

    const schema = buildSchema(schemaRaw)

    return graphqlHTTP({
      schema,
      graphiql: true,
      rootValue: resolver,
    })(req, res)
  }
}
