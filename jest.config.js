module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!mock-server/**',
    '!**/tests/**',
    '!**/types/**',
    '!App.tsx'
  ],
  moduleNameMapper: {
    /* added the line below to resolve absolute imports from the root directory,
    e.g. for all the custom react testing library functions
    see https://testing-library.com/docs/react-testing-library/setup/#configuring-jest-with-test-utils */
    'testing-library/extension': '<rootDir>/tests/integration/utils'
  },
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/tests/integration/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation/elements|rn-flipper-async-storage-advanced|react-native-flipper|react-native-vector-icons)/)'
  ]
};
