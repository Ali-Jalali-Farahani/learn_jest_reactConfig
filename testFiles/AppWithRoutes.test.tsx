import { TextEncoder } from 'util';
Object.assign(global, { TextEncoder });

import { render, screen } from '@testing-library/react';
import AppWithRoutes from './AppWithRoutes';

describe('App with routes test suite', ()=>{
    it('should always load the navbar', ()=>{
        render(<AppWithRoutes />)
        const navbar = screen.getByTestId('NavBar')

        expect(navbar).toBeInTheDocument()
    })

    it('Should initially load the home component', ()=>{
        render(<AppWithRoutes />)
        const home = screen.getByTestId('HomePage')

        expect(home).toBeInTheDocument()
    })

})