import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  name: 'gasp',
  title: 'GASP Studio',
  projectId: '9cpfuau7',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool({structure})],
  schema: {
    types: schemaTypes,
  },
})
