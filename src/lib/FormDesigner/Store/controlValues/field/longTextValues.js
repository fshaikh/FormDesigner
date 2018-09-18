import SystemTypes from '../../../Common/Models/SystemTypes'

export const longTextValues = {
    "hintText": "",
    "placeholder": "",
    "showLabel": true,
    "readOnly": true,
    rows: 3
};

export const getFieldMeta = () => {
    return {
        rows: {
            name: "rows",
            type: SystemTypes.number,
            label: "Rows",
            readOnly: false,
            visible: true
        }
    }
};