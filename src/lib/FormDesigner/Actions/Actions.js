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