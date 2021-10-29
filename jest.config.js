module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.ts?$": "ts-jest"
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!(lodash-es)/)"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },

}