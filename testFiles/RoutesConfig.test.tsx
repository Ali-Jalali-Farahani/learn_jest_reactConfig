import { TextEncoder } from 'util';
Object.assign(global, { TextEncoder });

import { createMemoryRouter, RouterProvider } from "react-router";
import { routesConfig } from "./RoutesConfig";
import { render, screen } from "@testing-library/react";



describe('Routes config tests', () => {

    it('Should load the home component first', () => {
        const route = '/'

        const router = createMemoryRouter(
            routesConfig, {
                initialEntries:[route]
            }
        )

        render(<RouterProvider router={router}/>)

        const home = screen.getByTestId('HomePage')

        expect(home).toBeInTheDocument();
    })

    it('Should load the about component on about route', () => {
        const route = '/about'

        const router = createMemoryRouter(routesConfig, {
            initialEntries: [route]
        })

        render(<RouterProvider router={router} />)

        const about = screen.getByTestId('AboutPage')

        expect(about).toBeInTheDocument();
    })

    it('Should load the not found component on invalid route', () => {
        const route = '/notSupported'

        const router = createMemoryRouter(routesConfig, {
            initialEntries: [route]
        })

        render(<RouterProvider router={router} />)

        const pageNotFound = screen.getByTestId('PageNotFound')

        expect(pageNotFound).toBeInTheDocument();
    })

    it('Should load the Post component on post route', () => {
        const route = '/post/2'

        const router = createMemoryRouter(routesConfig, {
            initialEntries: [route]
        })

        render(<RouterProvider router={router} />)

        const post = screen.getByTestId('PostPage')

        expect(post).toBeInTheDocument();
    })
});