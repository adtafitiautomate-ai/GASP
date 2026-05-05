import type {StructureResolver} from 'sanity/structure'
import {ImageIcon, PlayIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('GASP Content')
    .items([
      S.documentTypeListItem('eventMedia').title('Event Images').icon(ImageIcon),
      S.documentTypeListItem('eventVideo').title('Event Videos').icon(PlayIcon),
    ])
