/**
 * React specific imports
 */
import React from 'react';

/**
  * Lib specific imports
*/
import FormDesignerContext from '../../Store/FormDesignerContext'
import ActionButton from './ActionButton/ActionButton';
import * as Actions from '../../Actions/Actions';


/**
 * Presentational component which acts as a container forall action buttons
 * @param {*object} props 
 */
const ActionBar = (props) => {
    return (
        <FormDesignerContext.Consumer>
            {(context) =>{
                return <React.Fragment>
                            <ActionButton type="addRow"
                                          title={context.strings.AddRow}
                                          action = {Actions.AddRowAction}/>
                            <ActionButton type="save"
                                          title={context.strings.Save}
                                          action = {Actions.SaveAction}/>
                        </React.Fragment> 
            }}
        </FormDesignerContext.Consumer>   
    );
};

export default ActionBar;