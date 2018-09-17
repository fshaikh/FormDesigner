/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * MAterial UI specific imports
 */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import IconedButton from '../../../../Common/Components/IconButton/IconedButton';
import PropertyPane from '../../../../Common/Components/PropertyPane/PropertyPane';
import ValidatorForm from './ValidatorForm';
import * as LocalizationService from '../../../../Strings/LocalizationService'

export default class ValidatorPropertyPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                showValidatorForm: false,
                selectedRow:{}
            };
        this.onFormClose = this.onFormClose.bind(this);
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconedButton label={LocalizationService.getStrings().AddValidator}
                                      onClick={(event) => this.setState({showValidatorForm: true})}>
                                    <AddCircleIcon />
                        </IconedButton>
                    </Toolbar>
                </AppBar>
                <PropertyPane rows={this.getRows()}
                              columns={this.getColumns()}
                              onPropertyChange={(name, value) => console.log(name,  value)}
                              onRowSelect={(row) => this.setState({showValidatorForm: true,selectedRow: row})}/>
                <ValidatorForm open={this.state.showValidatorForm}
                               selectedValue= {this.state.selectedRow}
                               validValidators={this.props.control.validValidators}
                               onClose={(formData, isCancel) => this.onFormClose(formData,isCancel)}  />                                   
            </div>
        );
    }

    onFormClose(formData,isCancel) {
        if(isCancel){
            this.setState({showValidatorForm: false})
            return;
        }
        this.props.onPropertyChange(this.props.control,this.props.control.validValidators[formData.validator],formData.validator);
        this.setState({showValidatorForm: false})
    }

    getColumns() {
        return [
            LocalizationService.getStrings().Validator,
            LocalizationService.getStrings().Property
        ];
    }

    getRows() {
        const control = this.props.control;
        const id = control.systemId;
        const rows = Object.keys(control.validators)
                            .map((key) => {
                                  return {
                                            name: key,
                                            value: control.validators[key],
                                            id: `${id}-${key}`,
                                            label: control.validators[key].label,
                                            type: control.validators[key].type
                                        }
                            }); 
        return rows;
    }
}

ValidatorPropertyPane.propTypes = {
    control: PropTypes.object.isRequired
};