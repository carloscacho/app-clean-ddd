module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/teste/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageForm: [
    '<rootDir>/src/**/.ts'
  ]
}