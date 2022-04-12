module.exports = {
    collectCoverageFrom: [
        '**/*.{js}'
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        '^.+\\.(js)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.js']
}