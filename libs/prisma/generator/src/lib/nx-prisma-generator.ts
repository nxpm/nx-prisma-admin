import { generatorHandler } from '@prisma/generator-helper'
import { ensureDirSync, writeFileSync } from 'fs-extra'
import { dirname, join } from 'path'
import { analyzeDatamodelStructure } from './generator/analyze-datamodel-structure'
import { generateAdminApiStructure } from './generator/generate-admin-api-structure'

generatorHandler({
  onManifest() {
    return {
      defaultOutput: 'nx-prisma',
      prettyName: 'nx-prisma',
    }
  },
  async onGenerate(options) {
    const structure = analyzeDatamodelStructure(options.dmmf)
    const models = generateAdminApiStructure(structure)

    if (options.generator.output) {
      try {
        await writeToFile(
          join(options.generator.output, `index.ts`),
          'export const nxPrismaStructure = ' + JSON.stringify(structure, null, 2),
        )
        await writeToFile(
          join(options.generator.output, `models.ts`),
          'export const nxPrismaModels = ' +
            JSON.stringify(
              models.map((item) => item.model),
              null,
              2,
            ),
        )
      } catch (e) {
        console.error('Error: unable to write files for nx-prisma')
        throw e
      }
    } else {
      throw new Error('No output was specified for nx-prisma')
    }
  },
})

function writeToFile(path: string, content: string) {
  ensureDirSync(dirname(path))
  writeFileSync(path, content)
}
