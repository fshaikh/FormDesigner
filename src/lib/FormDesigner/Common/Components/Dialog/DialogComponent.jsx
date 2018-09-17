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
import Button from '@material-ui/core/Button';

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
            {renderActionButtons(props)}
      </Dialog>
    );
};

const renderActionButtons = (props) => {
    return props.actionButtons == null || props.actionButtons.length === 0 ?
                '' :
                getActionButtons(props)
};

const getActionButtons = (props) => {
    return props.actionButtons.map((button) => {
        return <Button onClick={button.action} color="primary">
                    {button.text}
               </Button>
    });
};

DialogComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    showFullScreen: PropTypes.bool,
    actionButtons:PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
    }))
};

DialogComponent.defaultProps = {
    showFullScreen: false
}

export default DialogComponent;