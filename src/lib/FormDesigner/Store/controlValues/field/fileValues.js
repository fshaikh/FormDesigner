import SystemTypes from '../../../Common/Models/SystemTypes'

export const fileValues = {
    "hintText": "",
    "placeholder": "",
    "showLabel": true,
    "readOnly": true,
    "multiple":true,
    "allowedExtensions":[],
    "allowedSize":0
};

export const getFieldMeta = () => {
    return {
        multiple: {
            name: "multiple",
            type: SystemTypes.boolean,
            label: "Allow multiple uploads",
            readOnly: false,
            visible: true
        },
        allowedExtensions: {
            name: "allowedExtensions",
            type: SystemTypes.array,
            label: "Allowed Extensions",
            helpText:"Separate each extension by a comma. For eg: .jpg, .png",
            readOnly: false,
            visible: true
        },
        allowedSize: {
            name: "allowedSize",
            type: SystemTypes.number,
            label: "Maximum Allowed Size",
            helpText:"Specify in MB",
            readOnly: false,
            visible: true
        }
    }
};
