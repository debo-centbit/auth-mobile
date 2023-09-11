// jest.config.js
const { defaults: tsjPreset } = require("ts-jest/presets");
module.exports = {
  ...tsjPreset,
  verbose: true,
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|@yz1311/react-native-wheel-picker|react-native-blob-util|react-native-pdf|@react-native-community/datetimepicker|react-navigation|react-native-device-info|@react-native-community/masked-view|react-native-skeleton-placeholder/lib/SkeletonPlaceholder.js|engine.io-client|engine.io-parser|socket.io-parser|@react-navigation/.*|@unimodules/.*)",
  ],
  moduleNameMapper: {
    "^react-i18next$":
      "<rootDir>/__mocks__/i18n.ts",
    "^@react-native-community/datetimepicker":
      "/Users/edismacbook/Desktop/Test/auth-mobile/__mocks__/DateTimePicker.tsx",
    "^@api(.*)$": "/Users/edismacbook/Desktop/Test/auth-mobile/src/api$1",
    "^@assets(.*)$": "/Users/edismacbook/Desktop/Test/auth-mobile/src/assets$1",
    "^@components(.*)$":
      "/Users/edismacbook/Desktop/Test/auth-mobile/src/components$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
    "^@localization(.*)$": "<rootDir>/src/localization$1",
    "^@navigation(.*)$": "<rootDir>/src/navigation$1",
    "^@rtk(.*)$": "<rootDir>/src/rtk$1",
    "^@screens(.*)$": "<rootDir>/src/screens$1",
    "^@theme(.*)$": "<rootDir>/src/theme$1",
    "^@utils$": "<rootDir>/src/utils/index",
    "^react-native-safe-area-context$":
      "<rootDir>/__mocks__/react-native-safe-area-context.ts",
  },
  setupFiles: [
    "./jest.setup.js",
    "/Users/edismacbook/Desktop/Test/auth-mobile/node_modules/react-native/jest/setup.js",
    "/Users/edismacbook/Desktop/Test/auth-mobile/node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "/Users/edismacbook/Desktop/Test/auth-mobile/node_modules/react-native-safe-area-context/jest/mock.tsx",
  ],
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(test).ts?(x)",
    "**/?(*.)+(test).js?(x)",
  ],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  collectCoverageFrom: ["src/components/**/*.{ts,tsx}"],
  coverageReporters: ["text", "cobertura", "lcov"],
  reporters: ["default", "jest-junit"],
  testResultsProcessor: "jest-sonar-reporter",
};
