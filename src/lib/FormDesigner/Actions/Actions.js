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