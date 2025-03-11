import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';

export default function(plugin: IPlugin): void {
  importTypes(plugin);

  plugin.metadata = require('./package.json');

  // This specifically sets the icon for the node driver, not the extension itself.
  plugin.register('image', 'providers/vultr.svg', 'https://helm-charts.ewr1.vultrobjects.com/icons/vultr.svg');
}