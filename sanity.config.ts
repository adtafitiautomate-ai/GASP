import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import ApplicationExportTool from './src/sanity/ApplicationExportTool'

export default defineConfig({
  name: 'gasp',
  title: 'GASP Studio',
  projectId: '9cpfuau7',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool({structure})],
  tools: (previousTools) => [
    ...previousTools,
    {
      name: 'application-export',
      title: 'Download Applications',
      component: ApplicationExportTool,
    },
  ],
  schema: {
    types: schemaTypes,
  },
})
