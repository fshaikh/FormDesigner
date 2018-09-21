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
//import FormRenderer from '@reversecurrent/react-form-meta/FormRenderer'

import * as LocalizationService from '../../../../Strings/LocalizationService';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '@reversecurrent/formrenderer/FormRenderer.css';
const FormRenderer = require('@reversecurrent/formrenderer/FormRenderer').FormRenderer;
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
                            <FormRenderer schema={getSchema(context)}
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
        "rows": {
            "5ecd4c6c-e67a-481a-b8a4-f257387541d6": {
                "id": "5ecd4c6c-e67a-481a-b8a4-f257387541d6",
                "index": 0,
                "fields": {
                    "e5b46d1a-37f0-49e1-b677-f83826315db3": {
                        "systemId": "e5b46d1a-37f0-49e1-b677-f83826315db3",
                        "base": "field",
                        "type": "ShortText",
                        "label": LocalizationService.getStrings().EditFormPropertiesTitle,
                        "properties": {
                            "hintText": "",
                            "placeholder": "Enter form title here",
                            "showLabel": true,
                            "readOnly": false
                        },
                        "id": "title",
                        "name": "title",
                        "layoutType": 3,
                        "validators": []
                    }
                },
                "rowType": 3
            },
            "88a05e83-8eec-449f-859c-4541fd7ade09": {
                "id": "88a05e83-8eec-449f-859c-4541fd7ade09",
                "index": 1,
                "fields": {
                    "60a17bb2-f62a-4806-ac21-ecbda439e167": {
                        "systemId": "60a17bb2-f62a-4806-ac21-ecbda439e167",
                        "base": "field",
                        "type": "LongText",
                        "label": "Description",
                        "properties": {
                            "hintText": "",
                            "placeholder": "Enter form description here",
                            "showLabel": true,
                            "readOnly": false,
                            "rows": 3
                        },
                        "id": "description",
                        "name": "description",
                        "layoutType": 3,
                        "validators": []
                    }
                },
                "rowType": 3
            },
            "5f89f533-b38a-433e-91bf-6a8e517ac4e6": {
                "id": "5f89f533-b38a-433e-91bf-6a8e517ac4e6",
                "index": 2,
                "fields": {
                    "add44e0b-67a0-40cc-9492-bf9ce59e9a47": {
                        "systemId": "add44e0b-67a0-40cc-9492-bf9ce59e9a47",
                        "base": "field",
                        "type": "ShortText",
                        "label": "Root Id Prefix",
                        "properties": {
                            "hintText": "",
                            "placeholder": "",
                            "showLabel": true,
                            "readOnly": false
                        },
                        "id": "rootIdPrefix",
                        "name": "rootIdPrefix",
                        "layoutType": 3,
                        "validators": []
                    }
                },
                "rowType": 3
            },
            "ba2437b2-446e-4e53-9181-c0fb5c8655f5": {
                "id": "ba2437b2-446e-4e53-9181-c0fb5c8655f5",
                "index": 3,
                "fields": {
                    "0ec86717-e687-4ae6-b3ec-c330e8e61cfb": {
                        "systemId": "0ec86717-e687-4ae6-b3ec-c330e8e61cfb",
                        "base": "field",
                        "type": "ShortText",
                        "label": "Id",
                        "properties": {
                            "hintText": "",
                            "placeholder": "",
                            "showLabel": true,
                            "readOnly": false
                        },
                        "id": "id",
                        "name": "id",
                        "layoutType": 1,
                        "validators": []
                    },
                    "9a8485af-668f-40e1-8964-3f6f24cc1179": {
                        "systemId": "9a8485af-668f-40e1-8964-3f6f24cc1179",
                        "base": "field",
                        "type": "ShortText",
                        "label": "Name",
                        "properties": {
                            "hintText": "",
                            "placeholder": "",
                            "showLabel": true,
                            "readOnly": false
                        },
                        "meta": {
                            "base": {
                                "name": "base",
                                "type": "String",
                                "readOnly": true,
                                "visible": false
                            },
                            "meta": {
                                "visible": false
                            },
                            "properties": {
                                "visible": false
                            },
                            "validators": {
                                "visible": false
                            },
                            "validValidators": {
                                "visible": false
                            },
                            "systemId": {
                                "name": "systemId",
                                "type": "String",
                                "label": "System Id",
                                "readOnly": true,
                                "visible": false
                            },
                            "type": {
                                "name": "type",
                                "type": "String",
                                "label": "Control Type",
                                "readOnly": true,
                                "visible": false
                            },
                            "id": {
                                "name": "id",
                                "type": "String",
                                "label": "Id",
                                "readOnly": false,
                                "visible": true
                            },
                            "name": {
                                "name": "name",
                                "type": "String",
                                "label": "Name",
                                "readOnly": false,
                                "visible": true
                            },
                            "label": {
                                "name": "label",
                                "type": "String",
                                "label": "Label",
                                "readOnly": false,
                                "visible": true
                            },
                            "hintText": {
                                "name": "hintText",
                                "type": "String",
                                "label": "Hint Text",
                                "readOnly": false,
                                "visible": true
                            },
                            "placeholder": {
                                "name": "placeholder",
                                "type": "String",
                                "label": "Placeholder",
                                "readOnly": false,
                                "visible": true
                            },
                            "readOnly": {
                                "name": "readOnly",
                                "type": "Boolean",
                                "label": "Read Only",
                                "readOnly": false,
                                "visible": true
                            },
                            "showLabel": {
                                "name": "showLabel",
                                "type": "Boolean",
                                "label": "Show Label",
                                "readOnly": false,
                                "visible": true
                            },
                            "layoutType": {
                                "name": "layoutType",
                                "type": "Choice",
                                "label": "Layout",
                                "readOnly": false,
                                "visible": true,
                                "values": [
                                    {
                                        "key": 1,
                                        "value": "Left"
                                    },
                                    {
                                        "key": 2,
                                        "value": "Right"
                                    },
                                    {
                                        "key": 3,
                                        "value": "Span"
                                    }
                                ]
                            }
                        },
                        "validValidators": {
                            "required": {
                                "name": "required",
                                "label": "Required",
                                "helpText": "",
                                "type": "Boolean",
                                "args": []
                            },
                            "minLength": {
                                "name": "minLength",
                                "label": "Minimum Length",
                                "helpText": "",
                                "type": "Number",
                                "args": [
                                    10
                                ]
                            },
                            "maxLength": {
                                "name": "maxLength",
                                "label": "Maximum Length",
                                "helpText": "",
                                "type": "Number",
                                "args": [
                                    20
                                ]
                            }
                        },
                        "id": "name",
                        "name": "name",
                        "layoutType": 2,
                        "validators": []
                    }
                },
                "rowType": 4
            },
            "5453a0b7-49f9-4fa5-882b-b20ffed6b0cf": {
                "id": "5453a0b7-49f9-4fa5-882b-b20ffed6b0cf",
                "index": 4,
                "fields": {
                    "986fe08e-494d-442e-b719-20ac2d52ef86": {
                        "systemId": "986fe08e-494d-442e-b719-20ac2d52ef86",
                        "base": "field",
                        "type": "ShortText",
                        "label": "Class Name",
                        "properties": {
                            "hintText": "",
                            "placeholder": "",
                            "showLabel": true,
                            "readOnly": false
                        },
                        "id": "className",
                        "name": "className",
                        "layoutType": 3,
                        "validators": []
                    }
                },
                "rowType": 3
            },
            "7f3713fe-0ebe-4a78-807b-5a118b30954a": {
                "id": "7f3713fe-0ebe-4a78-807b-5a118b30954a",
                "index": 5,
                "fields": {
                    "6ea5ab10-b496-496a-937f-704c62cfc465": {
                        "systemId": "6ea5ab10-b496-496a-937f-704c62cfc465",
                        "base": "field",
                        "type": "CheckBox",
                        "label": "Auto Complete?",
                        "properties": {
                            "hintText": "",
                            "showLabel": false,
                            "readOnly": false,
                            "checked": 0
                        },
                       
                        "id": "autoComplete",
                        "name": "autoComplete",
                        "layoutType": 3,
                        "validators": []
                    }
                },
                "rowType": 3
            }
        },
        "formProperties": {
            "title": "Edit Form Properties",
            "autoComplete": true
        }
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