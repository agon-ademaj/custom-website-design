import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const MegaMenu: GlobalConfig = {
  slug: 'mega-menu',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
};

export default MegaMenu;
