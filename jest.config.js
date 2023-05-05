const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',
  
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    // '^@*(.*)$': '<rootDir>/src/$1',

    // '^@/public/(.*)$': '<rootDir>/public/$1',
    "@app(.*)$": 
      "<rootDir>/src/app/$1"
    ,
    "@pages(.*)$": 
      "<rootDir>/src/pages/$1"
    ,
    "@entities(.*)$": 
      "<rootDir>/src/entities/$1"
    ,
    "@shared(.*)$": 
      "<rootDir>/src/shared/$1"
    ,
    "@features(.*)$": 
      "<rootDir>/src/features/$1"
    ,
    "@widgets(.*)$": 
      "<rootDir>/src/widgets/$1"
    ,
    "@public(.*)$": 
      "<rootDir>/public/$1"
    
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!./coverage/**/*.*',
    '!./.next/**/*.*',
  ],
  
  // coverageThreshold: {
  //   global: {
  //     branches: 30,
  //     functions: 30,
  //     lines: 30,
  //     statements: 30,
  //   },
  // },
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
