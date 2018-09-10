import React from 'react';
import renderer from 'react-test-renderer';
import getElementWithContext from 'react-test-context-provider'

import * as Core from './core';
import FormDesignerAppBar from '../lib/FormDesigner/FDBar/FormDesignerAppBar'
import FormName from '../lib/FormDesigner/FDBar/FormName/FormName';


describe('Form Designer App Bar component', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const Provider = Core.getContextProvider()
            const component = renderer.create(
                    <Provider value={Core.getContextDefault()}>
                        <FormDesignerAppBar>
                            <FormName />
                        </FormDesignerAppBar>
                    </Provider>
                ).toJSON();
            expect(component).toMatchSnapshot()
        });
    });
});