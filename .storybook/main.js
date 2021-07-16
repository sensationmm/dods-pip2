const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  // Add nextjs preset
  presets: [path.resolve(__dirname, './next-preset.js')],
};
