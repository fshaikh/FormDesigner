import SystemTypes from '../../../Common/Models/SystemTypes'

export const commonFieldValues = {
    "id": "",
    "name": "",
    "hintText": "",
    "placeholder": "",
    "showLabel": true,
    "readOnly": true,
    "validators": []
};

export const getFieldMeta = () => {
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
        }
    }
};
