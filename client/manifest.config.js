import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: "Sparroh Fetch",
  version: pkg.version,
  icons: {
    16: 'public/icon/icon_16.png',
    32: 'public/icon/icon_32.png',
    48: 'public/icon/icon_48.png',
    128: 'public/icon/icon_128.png'
  },
  action: {
    default_icon: {
      16: 'public/icon/icon_16.png',
      32: 'public/icon/icon_32.png',
      48: 'public/icon/icon_48.png',
      128: 'public/icon/icon_128.png'
    },
    default_popup: 'src/panels/popup/index.html',
  },
  host_permissions: [
    'https://www.amazon.com.au/*',
    'https://www.amazon.com/*',
    'https://m.media-amazon.com/*'
  ],
  permissions: [
    'sidePanel',
    'contentSettings',
    'scripting',
    'tabs'
  ],
  side_panel: {
    default_path: 'src/panels/sidepanel/index.html',
  },
})
