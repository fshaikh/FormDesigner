/**
 * React specific imports
 */
import React from 'react';

/**
 * Material UI imports
 */
import SaveIcon from '@material-ui/icons/Save';

/**
  * Lib specific imports
*/
import * as Actions from '../../../Actions/Actions'
import IconedButton from '../../../Common/Components/IconButton/IconedButton'
import * as LocalizationService from '../../../Strings/LocalizationService';

/**
 * Represents Save Action button
 * @param {*object} context 
 */
const SaveActionButton = ({context}) => {
    return (
                <IconedButton label={getLabel(context.state.isDirty)}
                              onClick={(event) => context.eventEmitter.dispatch(Actions.SaveAction(event))}
                              badge={context.state.isDirty ? '' : undefined}>
                              <SaveIcon />
                </IconedButton>
    );
};

const getLabel = (isDirty) => {
    return isDirty ? LocalizationService.getStrings().UnsavedChanges: LocalizationService.getStrings().Save;
}

export default SaveActionButton;