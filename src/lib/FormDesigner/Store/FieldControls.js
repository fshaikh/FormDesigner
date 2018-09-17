import FieldControlsEnum from '../Common/Models/FieldControlsEnum';
import Strings from '../Strings/strings-en';
import ControlTypesEnum from '../Common/Models/ControlTypesEnum';
import * as longTextValues from './controlValues/field/longTextValues';
import * as checkBoxValues from './controlValues/field/checkBoxValues';
import * as multipleValues from './controlValues/field/multipleValues';
import * as fileValues from './controlValues/field/fileValues';
import * as fieldValues from './controlValues/field/fieldValues';
import * as Validators from './Validators';
import ValidatorEnum from '../Common/Models/ValidatorEnum';

const commonMeta = fieldValues.getFieldMeta();
const ControlValidators = Validators.SystemValidators;
export const FieldControls = [
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.ShortText,
        label: Strings.ShortText,
        properties: {},
        meta: commonMeta,
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]},
            [ValidatorEnum.MinLength] : {...ControlValidators[ValidatorEnum.MinLength]},
            [ValidatorEnum.MaxLength] : {...ControlValidators[ValidatorEnum.MaxLength]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.LongText,
        label: Strings.LongText,
        properties: longTextValues.longTextValues,
        meta: {...commonMeta, ...longTextValues.getFieldMeta()},
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]},
            [ValidatorEnum.MinLength] : {...ControlValidators[ValidatorEnum.MinLength]},
            [ValidatorEnum.MaxLength] : {...ControlValidators[ValidatorEnum.MaxLength]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Checkbox,
        label: Strings.Checkbox,
        properties: checkBoxValues.checkBoxValues,
        meta: {...commonMeta, ...checkBoxValues.getFieldMeta()},
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Dropdown,
        label: Strings.Dropdown,
        properties: multipleValues.multipleValues,
        meta: {...commonMeta, ...multipleValues.getFieldMeta()},
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Radio,
        label: Strings.Radio,
        properties: multipleValues.multipleValues,
        meta: {...commonMeta, ...multipleValues.getFieldMeta()},
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.File,
        label: Strings.File,
        properties: fileValues.fileValues,
        meta: {...commonMeta, ...fileValues.getFieldMeta()},
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Email,
        label: Strings.Email,
        meta: commonMeta,
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    },
    {
        base: ControlTypesEnum.Field,
        type: FieldControlsEnum.Number,
        label: Strings.Number,
        meta: commonMeta,
        validValidators:{
            [ValidatorEnum.Required] : {...ControlValidators[ValidatorEnum.Required]}
        }
    }
];

export const normalizedFieldControls = FieldControls.reduce((accumulator, item) => {
                                    accumulator[item.type] = item;
                                    return accumulator;
                                },{});
