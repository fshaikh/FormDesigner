import React from 'react';
import renderer from 'react-test-renderer';
import FormDesigner from '../lib/FormDesigner/FormDesigner'

describe('Form Designer', () => {
    it('should check for prop types', () => {
        const tree = renderer.create(<FormDesigner/>);
    });
});