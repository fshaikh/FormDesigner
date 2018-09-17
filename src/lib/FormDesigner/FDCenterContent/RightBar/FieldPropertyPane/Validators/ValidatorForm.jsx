/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/**
 * Lib-specific imports
 */
import DialogComponent from '../../../../Common/Components/Dialog/DialogComponent';
import Form from '../../../../../../../node_modules/@reversecurrent/react-form-meta/Form'
import * as LocalizationService from '../../../../Strings/LocalizationService';
import FieldControlsEnum from '../../../../Common/Models/FieldControlsEnum';
import styles from './ValidatorForm.module.css'
/**
 * Represents Validator Form component. Receives the form data and
 * shows the Form UI. Constructs the form schema as this component is specific
 * to Validator Form. Uses DialogComponent to show the form
 * Component supports both normal and full screen mode
 * 
 * @param {*} props 
 */
const ValidatorForm = (props) => {
    var selectedValue = '';
    return(
                 <DialogComponent open={props.open}
                                  showFullScreen={props.showFullScreen}
                                  actionButtons={[
                                      {
                                            text: LocalizationService.getStrings().SaveAndClose,
                                            action: () => {props.onClose({validator: selectedValue},false)}
                                      },
                                      {
                                            text: LocalizationService.getStrings().Cancel,
                                            action: () => props.onClose({},true)
                                      }]}>
                            <form autoComplete="off" className={styles.form}>
                                <FormControl className={styles.validatorSelect}>
                                    <InputLabel htmlFor="validators">{LocalizationService.getStrings().SelectValidator}</InputLabel>
                                    <Select
                                        onChange={(event) => selectedValue = event.target.value}
                                    >
                                        {Object.keys(props.validValidators).map((key) => {
                                            return <MenuItem key={key}
                                                             value={key}>{props.validValidators[key].label}
                                                   </MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </form>
                        </DialogComponent>


    );
};



/**
 * Defines Prop Types
 * open: To show/hide the component
 * validValidators: JSON for validators to be shown in the form
 * showFullScreen: To show the UI as full screen or a dialog
 * onClose: Callback to be invoked when the form is closed
 */
ValidatorForm.propTypes = {
    open: PropTypes.bool.isRequired,
    validValidators: PropTypes.object,
    showFullScreen: PropTypes.bool,
    onClose: PropTypes.func,
    selectedValue: PropTypes.object
};

ValidatorForm.defaultProps = {
    showFullScreen: false
}

export default ValidatorForm;