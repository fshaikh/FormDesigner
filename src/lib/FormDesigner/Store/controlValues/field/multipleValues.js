import SystemTypes from '../../../Common/Models/SystemTypes'

export const multipleValues = {
    "hintText": "",
    "showLabel": true,
    "readOnly": true,
    "enum":[],
    "enumNames":[]
};

export const getFieldMeta = () => {
    return {
        enum: {
            name: "enum",
            type: SystemTypes.array,
            label: "Choice Keys",
            readOnly: false,
            visible: true
        },
        enumNames :{
            name: "enumNames",
            type: SystemTypes.array,
            label: "Choice Values",
            readOnly: false,
            visible: true
        }
    };
    
};