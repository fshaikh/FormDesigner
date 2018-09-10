import React from 'react';
import renderer from 'react-test-renderer';
import getElementWithContext from 'react-test-context-provider'

import * as Core from './core';
import FormName from '../lib/FormDesigner/FDBar/FormName/FormName';


describe('Form Name component', () => {
    describe('snapshot tests', () => {
        it('should render correctly', () => {
            const Provider = Core.getContextProvider()
            const component = renderer.create(
                    <Provider value={Core.getContextDefault()}><FormName /></Provider>
                ).toJSON();
            expect(component).toMatchSnapshot()
        });
    });
});