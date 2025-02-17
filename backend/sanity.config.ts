import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'sw_habitation',

  projectId: 'w037c012',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
