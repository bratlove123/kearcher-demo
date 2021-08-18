module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteNameTemplate: '{filename}',
        ancestorSeparator: ' › ',
        outputDirectory: 'output/reports/unit',
        outputName: 'junit.xml',
      },
    ],
  ],
  coverageReporters: ['text', 'cobertura'],
};
