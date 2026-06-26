const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blockList: [
      // Ignore Android native build output folders
      /android\/app\/build\/.*/,
      /android\/app\/\.cxx\/.*/,
    ],
  },
  watchFolders: [],
};

module.exports = mergeConfig(defaultConfig, config);
