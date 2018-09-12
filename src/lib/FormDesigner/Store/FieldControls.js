import FieldControlsEnum from '../Common/Models/FieldControlsEnum';
import Strings from '../Strings/strings-en';
import ControlTypesEnum from '../Common/Models/ControlTypesEnum';
import longTextValues from './controlValues/field/longTextValues';
import checkBoxValues from './controlValues/field/checkBoxValues';
import multipleValues from './controlValues/field/multipleValues';
import fileValues from './controlValues/field/fileValues';

export const FieldControls = [
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.ShortText,
        label: Strings.ShortText,
        properties: {}
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.LongText,
        label: Strings.LongText,
        properties: longTextValues
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Checkbox,
        label: Strings.Checkbox,
        properties: checkBoxValues
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Dropdown,
        label: Strings.Dropdown,
        properties: multipleValues
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Radio,
        label: Strings.Radio,
        properties: multipleValues
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.File,
        label: Strings.File,
        properties: fileValues
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Email,
        label: Strings.Email
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Number,
        label: Strings.Number
    }
];

export const normalizedFieldControls = FieldControls.reduce((accumulator, item) => {
                                    accumulator[item.type] = item;
                                    return accumulator;
                                },{});
