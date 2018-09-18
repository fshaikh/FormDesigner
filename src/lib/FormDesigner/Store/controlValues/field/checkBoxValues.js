import SystemTypes from '../../../Common/Models/SystemTypes'

export const checkBoxValues = {
    "hintText": "",
    "showLabel": true,
    "readOnly": true,
    "checked": 0
};

export const getFieldMeta = () => {
    return {
        checked: {
            name: "enum",
            type: SystemTypes.boolean,
            label: "Checked",
            readOnly: false,
            visible: true
        }
    }
   
};