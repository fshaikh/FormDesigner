import ControlTypesEnum from '../Common/Models/ControlTypesEnum'; 
import * as fieldValues from './controlValues/field/fieldValues';

export const getControlSeed = (control) => {
    switch(control.base) {
        case ControlTypesEnum.Field:
            return getField(control);
        case ControlTypesEnum.Widget:
            return getWidget(control);
        default:
            return control;
    }
};

const getField = (field) => {


    return {...field, ...fieldValues.commonFieldValues};
};

const getWidget = (widget) => {

};
 