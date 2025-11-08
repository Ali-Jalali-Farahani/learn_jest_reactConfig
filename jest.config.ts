import type {Config} from 'jest'

const config:Config = {
    rootDir:"./",
    testEnvironment:"jsdom",
    setupFilesAfterEnv:["<rootDir>/test/jest.setup.ts"],

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        '^.+\\.(png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub'
    },

    moduleNameMapper: {

        '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$':'<rootDir>/test/mocks/fileMock.js',
        '\\.(css|less|scss|sass|styl)$': 'identity-obj-proxy',
        //swiper
        '^swiper/css$': 'identity-obj-proxy',
        '^swiper/css/(.*)$': 'identity-obj-proxy',
        '^swiper/modules$': 'identity-obj-proxy',
        '^swiper/react$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^next/font/local$': '<rootDir>/test/mocks/nextFontMock.js',

        //next Navigator
        '^next/navigation$': '<rootDir>/test/mocks/nextNavigationMock.js',

        //next bprogress
        '^@bprogress/next$': '<rootDir>/test/mocks/bprogress-next.js',

        //nextFontMock
        '^next/font/(.*)$': '<rootDir>/test/mocks/nextFontMock.js',
    },

    transformIgnorePatterns: [
        "node_modules/(?!(swiper|ssr-window|dom7)/)"
    ],

    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ]
}

export default config
