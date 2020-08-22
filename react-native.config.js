module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
        ios: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
  project: {
    ios: {},
    android: {}, // grouped into "project"
},
assets: ['./app/assets/fonts']
};
