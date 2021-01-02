export const nxPrismaStructure = {
  enumMap: {
    Role: {
      name: 'Role',
      values: [
        {
          name: 'Admin',
          dbName: null,
        },
        {
          name: 'User',
          dbName: null,
        },
      ],
      dbName: null,
    },
  },
  modelMap: {
    Category: {
      name: 'Category',
      isEmbedded: false,
      dbName: null,
      fields: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'name',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'products',
          kind: 'object',
          isList: true,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Product',
          hasDefaultValue: false,
          relationName: 'CategoryToProduct',
          relationFromFields: [],
          relationToFields: [],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      isGenerated: false,
      idFields: [],
      uniqueFields: [],
      uniqueIndexes: [],
    },
    Product: {
      name: 'Product',
      isEmbedded: false,
      dbName: null,
      fields: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'name',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'description',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'price',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Int',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'owner',
          kind: 'object',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'User',
          hasDefaultValue: false,
          relationName: 'ProductToUser',
          relationFromFields: ['ownerId'],
          relationToFields: ['id'],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'ownerId',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: true,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'category',
          kind: 'object',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Category',
          hasDefaultValue: false,
          relationName: 'CategoryToProduct',
          relationFromFields: ['categoryId'],
          relationToFields: ['id'],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'categoryId',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: true,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      isGenerated: false,
      idFields: [],
      uniqueFields: [],
      uniqueIndexes: [],
    },
    User: {
      name: 'User',
      isEmbedded: false,
      dbName: null,
      fields: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'role',
          kind: 'enum',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Role',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'developer',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Boolean',
          hasDefaultValue: true,
          default: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'email',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'username',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'password',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'firstName',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'lastName',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'avatarUrl',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'location',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'phone',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'bio',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'products',
          kind: 'object',
          isList: true,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Product',
          hasDefaultValue: false,
          relationName: 'ProductToUser',
          relationFromFields: [],
          relationToFields: [],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      isGenerated: false,
      idFields: [],
      uniqueFields: [],
      uniqueIndexes: [],
    },
  },
  modelFieldMap: {
    Category: {
      model: {
        name: 'Category',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: true,
            default: {
              name: 'cuid',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'createdAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'updatedAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: true,
          },
          {
            name: 'name',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'products',
            kind: 'object',
            isList: true,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Product',
            hasDefaultValue: false,
            relationName: 'CategoryToProduct',
            relationFromFields: [],
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        isGenerated: false,
        idFields: [],
        uniqueFields: [],
        uniqueIndexes: [],
      },
      enums: [],
      scalars: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'name',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      relations: [
        {
          name: 'products',
          kind: 'object',
          isList: true,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Product',
          hasDefaultValue: false,
          relationName: 'CategoryToProduct',
          relationFromFields: [],
          relationToFields: [],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
    },
    Product: {
      model: {
        name: 'Product',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: true,
            default: {
              name: 'cuid',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'createdAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'updatedAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: true,
          },
          {
            name: 'name',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'description',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'price',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Int',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'owner',
            kind: 'object',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'User',
            hasDefaultValue: false,
            relationName: 'ProductToUser',
            relationFromFields: ['ownerId'],
            relationToFields: ['id'],
            relationOnDelete: 'NONE',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'ownerId',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: true,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'category',
            kind: 'object',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Category',
            hasDefaultValue: false,
            relationName: 'CategoryToProduct',
            relationFromFields: ['categoryId'],
            relationToFields: ['id'],
            relationOnDelete: 'NONE',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'categoryId',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: true,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        isGenerated: false,
        idFields: [],
        uniqueFields: [],
        uniqueIndexes: [],
      },
      enums: [],
      scalars: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'name',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'description',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'price',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Int',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      relations: [
        {
          name: 'owner',
          kind: 'object',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'User',
          hasDefaultValue: false,
          relationName: 'ProductToUser',
          relationFromFields: ['ownerId'],
          relationToFields: ['id'],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'category',
          kind: 'object',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Category',
          hasDefaultValue: false,
          relationName: 'CategoryToProduct',
          relationFromFields: ['categoryId'],
          relationToFields: ['id'],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
    },
    User: {
      model: {
        name: 'User',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: true,
            default: {
              name: 'cuid',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'createdAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'updatedAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'DateTime',
            hasDefaultValue: true,
            default: {
              name: 'now',
              args: [],
            },
            isGenerated: false,
            isUpdatedAt: true,
          },
          {
            name: 'role',
            kind: 'enum',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Role',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'developer',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Boolean',
            hasDefaultValue: true,
            default: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'email',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: true,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'username',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: true,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'password',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'firstName',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'lastName',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'avatarUrl',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'location',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'phone',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'bio',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'String',
            hasDefaultValue: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'products',
            kind: 'object',
            isList: true,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            type: 'Product',
            hasDefaultValue: false,
            relationName: 'ProductToUser',
            relationFromFields: [],
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        isGenerated: false,
        idFields: [],
        uniqueFields: [],
        uniqueIndexes: [],
      },
      enums: [
        {
          name: 'role',
          kind: 'enum',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Role',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      scalars: [
        {
          name: 'id',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: true,
          default: {
            name: 'cuid',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'createdAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'updatedAt',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'DateTime',
          hasDefaultValue: true,
          default: {
            name: 'now',
            args: [],
          },
          isGenerated: false,
          isUpdatedAt: true,
        },
        {
          name: 'developer',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Boolean',
          hasDefaultValue: true,
          default: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'email',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'username',
          kind: 'scalar',
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'password',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'firstName',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'lastName',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'avatarUrl',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'location',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'phone',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
        {
          name: 'bio',
          kind: 'scalar',
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'String',
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
      relations: [
        {
          name: 'products',
          kind: 'object',
          isList: true,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: 'Product',
          hasDefaultValue: false,
          relationName: 'ProductToUser',
          relationFromFields: [],
          relationToFields: [],
          relationOnDelete: 'NONE',
          isGenerated: false,
          isUpdatedAt: false,
        },
      ],
    },
  },
}