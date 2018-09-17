import React from 'react'
import EventEmitter from '@reversecurrent/eventemitter/EventEmitter';
import Strings from '../lib/FormDesigner/Strings/strings-en';
import FormDesignerContext from '../lib/FormDesigner/Store/FormDesignerContext';

export const getContext = () => {
    return React.createContext(getContextDefault());
}

export const getContextProvider = () => {
    return FormDesignerContext.Provider;
}
export const getContextDefault = () => {

    return {
        formDefinition : {formName:'New Form'},
        eventEmitter: new EventEmitter(),
        strings: Strings
    };
};



 