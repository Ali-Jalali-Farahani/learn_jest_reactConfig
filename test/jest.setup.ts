import { TextEncoder } from 'util';
Object.assign(global, { TextEncoder });

import "@testing-library/jest-dom"

import { cleanup } from '@testing-library/react';
import '@testing-library/dom';
import React from "react";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

//global request
global.Request = class Request {
    url: string;
    method: string;
    headers: Record<string, string>;

    constructor(input: string,init: { method?: string; headers?: Record<string, string> } = {}) {
        this.url = input;
        this.method = init.method || 'GET';
        this.headers = init.headers || {};
    }
} as never;

//-----------------Mocks---------------------------
//lottiefiles mock
jest.mock('@lottiefiles/dotlottie-react', () => ({
    DotLottieReact: jest.fn(({src, autoplay, loop, onEvent, onStateChange, ...props}) => {
        React.useEffect(() => {
            if (autoplay && onStateChange) {
                onStateChange({ currentState: 'playing' });
            }
        }, [autoplay, onStateChange]);

        return React.createElement('div', {
            'data-testid': 'dotlottie-react-mock',
            'data-src': src,
            'data-autoplay': autoplay,
            'data-loop': loop,
            ...props
        });
    }),
}));

//SVG mock
jest.mock('./icon.svg', () => 'svg-mock');
//--------------------------------------------------
