/**
 * React specific imports
 */
import React from 'react';

/**
 * Import material-ui components
 */
import TextField from '@material-ui/core/TextField';

/**
 * Library specific imports
 */
import FormDesignerContext from '../../Store/FormDesignerContext';
import * as Actions from '../../Actions/Actions';

/**
 * Presentational component for representing Form Name UI
 * Uses TextField component of Material UI for rendering the text field
 * Consumes Context to read form definition and dispatch action when form name value changes
 */
const FormName = () => {
    return (
        <FormDesignerContext.Consumer>
            { (context) => { 
                return <TextField defaultValue={context.formDefinition.formName}
                              placeholder={context.strings.FormNamePlaceholder}
                              onChange={(event) => context.eventEmitter.dispatch(Actions.FormNameChangeAction(event.target.value))}     
                        />  
                }
            }
        </FormDesignerContext.Consumer>
    );
};

export default FormName;