module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/*', '<rootDir>/scripts/*', '<rootDir>/react-*/*'],
  globals: {
    VERSION: '1.0.0',
    BUILDTIME: '1970-01-01',
    ENVIRONMENT: 'development',
  },
  moduleNameMapper: {
    '^@js(.*)$': '<rootDir>/lib/js/$1',
    '^@scss(.*)$': '<rootDir>/lib/__mocks__/styleMock.js',
    '^@img(.*)$': '<rootDir>/lib/__mocks__/fileMock.js',
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/lib/__mocks__/fileMock.js',
    '.((s|p)?(c|a)ss|less)$': '<rootDir>/lib/__mocks__/styleMock.js',
  },
}
