module.exports = {
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: 'src/.*\\.spec\\.(ts|tsx|js)$',
};
