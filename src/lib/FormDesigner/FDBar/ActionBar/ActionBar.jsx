/**
 * React specific imports
 */
import React from 'react';

/**
 * Material UI imports
 */
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import PreviewIcon from '@material-ui/icons/RemoveRedEyeRounded';
import PublishIcon from '@material-ui/icons/CloudUpload'

/**
  * Lib specific imports
*/
import FormDesignerContext from '../../Store/FormDesignerContext'
import * as Actions from '../../Actions/Actions';
import IconedButton from '../../Common/Components/IconButton/IconedButton';
import styles from './ActionBar.module.css'
import withBadge from '../../Common/Components/Badge/Badge';
import SaveActionButton from './ActionButton/SaveActionButton';
/**
 * Presentational component which acts as a container forall action buttons
 * @param {*object} props 
 */
const ActionBar = (props) => {
    return (
        <FormDesignerContext.Consumer>
            {(context) =>{
                return <div className={styles.actionBar}>
                            <IconedButton label={context.strings.AddRow}
                                          onClick={(event) => context.eventEmitter.dispatch(Actions.AddRowAction(event))}>
                                          <AddCircleIcon />
                            </IconedButton>
                            <SaveActionButton context={context} />
                            
                            <IconedButton label={context.strings.EditFormProperties}
                                          onClick={(event) => context.eventEmitter.dispatch(Actions.ShowEditFormPropertiesAction(event))}>
                                          <EditIcon />
                            </IconedButton>
                            <IconedButton label={context.strings.Preview}
                                          >
                                          <PreviewIcon />
                            </IconedButton>
                            <IconedButton label={context.strings.Publish}
                                          >
                                          <PublishIcon />
                            </IconedButton>
                        </div> 
            }}
        </FormDesignerContext.Consumer>   
    );
};

export default ActionBar;