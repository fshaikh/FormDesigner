/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Material-UI specific imports
 */
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

/**
 * Encapsulates dialog UI. Clients consume this component to show the UI in a modal dialog. UI to be shown 
 * in the modal dialog is passed as children
 * @param {*} props 
 */
const DialogComponent = (props) => {
    return (
        <Dialog
            fullScreen={props.showFullScreen}
            open={props.open}
            >
            <DialogContent>
                {props.children}
            </DialogContent>
      </Dialog>
    );
};

DialogComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    showFullScreen: PropTypes.bool
};

DialogComponent.defaultProps = {
    showFullScreen: false
}

export default DialogComponent;