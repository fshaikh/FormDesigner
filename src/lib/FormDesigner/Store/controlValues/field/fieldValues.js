import SystemTypes from '../../../Common/Models/SystemTypes';
import RowType from '../../../Common/Models/RowType';
import * as LocalizationService from '../../../Strings/LocalizationService';

export const commonFieldValues = {
    "id": "",
    "name": "",
    "layoutType": RowType.Span,
    "validators": []
};

export const getFieldMeta = () => {
    const strings = LocalizationService.getStrings();
    return {
        base: {
            name: "base",
            type: SystemTypes.string,
            readOnly: true,
            visible: false
        },
        meta: {
            visible: false
        },
        properties: {
            visible: false
        },
        validators: {
            visible: false
        },
        validValidators: {
            visible: false
        },
        systemId: {
            name: "systemId",
            type: SystemTypes.string,
            label: "System Id",
            readOnly: true,
            visible: false
        },
        type : {
            name: "type",
            type: SystemTypes.string,
            label: "Control Type",
            readOnly: true,
            visible: false
        },
        id : {
            name: "id",
            type: SystemTypes.string,
            label: "Id",
            readOnly: false,
            visible: true
        },
        name: {
            name: "name",
            type: SystemTypes.string,
            label: "Name",
            readOnly: false,
            visible: true
        },
        label: {
            name: "label",
            type: SystemTypes.string,
            label: "Label",
            readOnly: false,
            visible: true
        },
        hintText: {
            name: "hintText",
            type: SystemTypes.string,
            label: "Hint Text",
            readOnly: false,
            visible: true
        },
        placeholder: {
            name: "placeholder",
            type: SystemTypes.string,
            label: "Placeholder",
            readOnly: false,
            visible: true
        },
        readOnly: {
            name: "readOnly",
            type: SystemTypes.boolean,
            label: "Read Only",
            readOnly: false,
            visible: true
        },
        showLabel: {
            name: "showLabel",
            type: SystemTypes.boolean,
            label: "Show Label",
            readOnly: false,
            visible: true
        },
        layoutType: {
            name: "layoutType",
            type: SystemTypes.choice,
            label: "Layout",
            readOnly: false,
            visible: true,
            values:[{key: RowType.Left, value: strings.Left},
                    {key: RowType.Right, value: strings.Right},
                    {key: RowType.Span, value: strings.Span}] 
        }
    }
};
