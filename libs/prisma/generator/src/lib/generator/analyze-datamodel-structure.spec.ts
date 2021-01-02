import { DMMF } from '@prisma/generator-helper'
import { getDMMF } from '@prisma/sdk'
import { readFileSync } from 'fs'
import { analyzeDatamodelStructure } from './analyze-datamodel-structure'

const datamodel = readFileSync(`${__dirname}/test-schema.prisma`).toString()

fdescribe('analyze-datamodel-structure', () => {
  let dmmf: DMMF.Document

  beforeEach(async () => {
    dmmf = await getDMMF({ datamodel })
  })

  it('should create basic model definition', () => {
    const schema = analyzeDatamodelStructure(dmmf)

    expect(schema.enumMap).toMatchSnapshot()
    expect(schema.modelMap).toMatchSnapshot()
    expect(schema.modelFieldMap).toMatchSnapshot()
  })
})
