import type {StructureResolver} from 'sanity/structure'
import {DocumentTextIcon, ImageIcon, PlayIcon, UserIcon} from '@sanity/icons'

const MANAGED_TYPES = ['newsArticle', 'eventMedia', 'eventVideo', 'membershipApplication']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('GASP Content')
    .items([
      S.documentTypeListItem('newsArticle').title('News & Updates').icon(DocumentTextIcon),
      S.divider(),
      S.documentTypeListItem('eventMedia').title('Event Images').icon(ImageIcon),
      S.documentTypeListItem('eventVideo').title('Event Videos').icon(PlayIcon),
      S.documentTypeListItem('membershipApplication').title('Membership Applications').icon(UserIcon),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !MANAGED_TYPES.includes(item.getId() || '')),
    ])
