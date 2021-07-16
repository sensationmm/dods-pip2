module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/src/config/setup.js'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/'],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/mocks/style-mock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/mocks/file-mock.js',
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/_app.tsx', '!coverage', '!src/globals/**/*.{ts,tsx}', '!src/pages/api/hello.ts'],
};
