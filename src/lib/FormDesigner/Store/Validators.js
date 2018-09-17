/**
 * Defines all available validators
 */
import ValidatorEnum from '../Common/Models/ValidatorEnum';
import * as LocalizationService from '../Strings/LocalizationService';
import SystemTypes from  '../Common/Models/SystemTypes'

export const SystemValidators = {
    /**
        * Required
    */
    [ValidatorEnum.Required] : {
        name: ValidatorEnum.Required,
        label: LocalizationService.getStrings().Required,
        helpText:'',
        type: SystemTypes.boolean,
        args:[]
    },
    /**
        * Minimum Length
    */
    [ValidatorEnum.MinLength] : {
        name: ValidatorEnum.MinLength,
        label: LocalizationService.getStrings().MinLength,
        helpText:'',
        type: SystemTypes.number,
        args:[10]
    },
    /**
        * Maximum Length
    */
    [ValidatorEnum.MaxLength] : {
        name: ValidatorEnum.MaxLength,
        label: LocalizationService.getStrings().MaxLength,
        helpText:'',
        type: SystemTypes.number,
        args:[20]
    }
};



