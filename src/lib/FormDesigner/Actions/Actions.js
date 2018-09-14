/**
 * Defines Form Designer actions
 */
export const FormNameChange = 'onFormNameChange';
export const FormNameChangeAction = (value) => {
    return {
        actionName: FormNameChange,
        payload: value
    }
};

export const AddRow = 'onAddRow';
export const AddRowAction = (event) => {
    return {
        actionName: AddRow,
        payload: event
    };
};

export const Save = 'onSave';
export const SaveAction = (event) => {
    return {
        actionName: Save,
        payload: event
    };
}

export const ShowEditFormProperties = 'ShowEditFormProperties';
export const ShowEditFormPropertiesAction = (event) => {
    return {
        actionName: ShowEditFormProperties,
        payload: event
    };
}

export const EditFormProperties = 'EditFormProperties';
export const EditFormPropertiesAction = (formData, isCancel) => {
    return {
        actionName: EditFormProperties,
        payload: {
            formData,
            isCancel
        }
    };
}

export const AddControl = 'onAddControl';
export const AddControlAction = (row, control) => {
    return {
        actionName: AddControl,
        payload: {
            row: row,
            control: control
        }
    };
};

export const SelectControl = 'onSelectControl';
export const SelectControlAction = (row, control) => {
    return {
        actionName: SelectControl,
        payload: {
            row: row,
            control: control
        }
    };
};

export const PropertyChange = 'onPropertyChangel';
export const PropertyChangeAction = (row, control, value, name) => {
    return {
        actionName: PropertyChange,
        payload: {
            row: row,
            control: control,
            value: value,
            name: name
        }
    };
};

export const DeleteRow = 'onDeleteRow';
export const DeleteRowAction = (row) => {
    return {
        actionName: DeleteRow,
        payload: {
            row: row
        }
    };
}