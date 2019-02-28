module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'siteConfig': '<rootDir>/app-config/app.development.config.js',
    'store': '<rootDir>/src/store',
    '^mixins/(.*)$': '<rootDir>/src/mixins/$1',
    'test-utils': '<rootDir>/tests/unit/utilities/test-utils.js',
    'backend-api': '<rootDir>/src/api/backend',
    'mock-api': '<rootDir>/tests/unit/utilities/mock-api.js',
    'api': '<rootDir>/src/api',
    '^assets/(.*)$': '<rootDir>/src/assest/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  reporters: [
    'default',
    ['jest-junit', {output: 'tests/unit/coverage/junit.xml'}]
  ],
  coverageDirectory: `<rootDir>/tests/unit/coverage`,
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)'],
  coverageReporters: ['cobertura', 'text-summary', 'lcov']
}
