import { DMMF } from '@prisma/generator-helper'
import { getDMMF } from '@prisma/sdk'
import { readFileSync } from 'fs'
import { analyzeDatamodelStructure } from './analyze-datamodel-structure'
import { DatamodelStructure } from './datamodel-structure'
import { generateAdminApiStructure } from './generate-admin-api-structure'

const datamodel = readFileSync(`${__dirname}/test-schema.prisma`).toString()

fdescribe('generate-admin-api-structure', () => {
  let dmmf: DMMF.Document
  let structure: DatamodelStructure

  beforeEach(async () => {
    dmmf = await getDMMF({ datamodel })
    structure = analyzeDatamodelStructure(dmmf)
  })

  it('should create basic model definition', () => {
    const defs = generateAdminApiStructure(structure)

    console.log(defs)
    expect(defs).toBeDefined()
  })
})
