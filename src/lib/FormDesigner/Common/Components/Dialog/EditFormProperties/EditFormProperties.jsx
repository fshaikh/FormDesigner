/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Lib-specific imports
 */
import DialogComponent from '../DialogComponent';
import FormDesignerContext from '../../../../Store/FormDesignerContext';
import * as Actions from '../../../../Actions/Actions';
import FieldControlsEnum from '../../../../Common/Models/FieldControlsEnum';
import Form from '../../../../../../../node_modules/@reversecurrent/react-form-meta/Form'

/**
 * Represents Edit Form Properties component. Receives the form data and
 * shows the Form UI. Constructs the form schema as this component is specific
 * to Edit Form Properties. Uses DialogComponent to show the form and Form component
 * to render the form based on the schema.
 * Component supports both normal and full screen mode
 * Dispatches onEditFormProperties action passing form properties when the form is saved/cancel
 * @param {*} props 
 */
const EditFormProperties = (props) => {
    return(
        <FormDesignerContext.Consumer>
            {(context) => {
                return <DialogComponent open={props.open} showFullScreen={props.showFullScreen}>
                            <Form schema={getSchema(context)}
                                formData={props.formData}
                                onSubmit = { (formData) => context.eventEmitter.dispatch(Actions.EditFormPropertiesAction(formData,false))}
                            />
                        </DialogComponent>
            }}
        </FormDesignerContext.Consumer>
    );
};

/**
 * Define the Form schema in JSON
 * @param {*} context 
 */
const getSchema = (context) => {
    const strings = context.strings;
    return {
        title: strings.EditFormPropertiesTitle,
        actionButtons:[
            {
                 type:"ActionSubmit",
                 text: strings.SaveAndClose
            },
            {
                type:"ActionButton",
                text: strings.Cancel,
                action: (event, formData) => {context.eventEmitter.dispatch(Actions.EditFormPropertiesAction(formData,true))}
             }
        ],
        fields: [
          {
            name:'title',
            type: FieldControlsEnum.ShortText,
            label: strings.EditFormPropertiesTitleField
          },
          {
            name:'description',
            type: FieldControlsEnum.LongText,
            label: strings.EditFormPropertiesDescription
          },
          {
            name:'rootIdPrefix',
            type: FieldControlsEnum.ShortText,
            label: strings.EditFormPropertiesRootIdPrefix
          },
          {
            name:'id',
            type: FieldControlsEnum.ShortText,
            label: strings.Id
          },
          {
            name:'name',
            type: FieldControlsEnum.ShortText,
            label: strings.Name
          },
          {
            name:'className',
            type: FieldControlsEnum.ShortText,
            label: strings.ClassNames,
            hintText: strings.ClassNamesHintText
          },
          {
            name:'autoComplete',
            type: FieldControlsEnum.Checkbox,
            label: strings.EditFormPropertiesAutoComplete,
            showLabel: true
          }
        ]
    };
}

/**
 * Defines Prop Types
 * open: To show/hide the component
 * formData: JSON objectrepresenting the formvalues
 * showFullScreen: To show the UI as full screen or a dialog
 */
EditFormProperties.propTypes = {
    open: PropTypes.bool.isRequired,
    formData: PropTypes.object,
    showFullScreen: PropTypes.bool
};

EditFormProperties.defaultProps = {
    showFullScreen: false
}

export default EditFormProperties;