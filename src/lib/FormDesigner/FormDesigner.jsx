/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Lib specific imports
 */
import FormDesignerContext from './Store/FormDesignerContext';
import EventEmitter from '../../../node_modules/@reversecurrent/eventemitter/EventEmitter'
import * as Actions from './Actions/Actions';
import Strings from './Strings/strings-en';
import FormDesignerAppBar from './FDBar/FormDesignerAppBar';
import FormDesignerCenterContent from './FDCenterContent/FormDesignerCenterContent';
import * as IdService from './Common/Services/IdService';
import * as FieldFactory from './Store/FieldFactory';
import EditFormProperties from './Common/Components/Dialog/EditFormProperties/EditFormProperties';

/**
 * Import css using CSS modules
 */
import styles from './FormDesigner.module.css';

/**
 * Form Designer container component
 */
export default class FormDesigner extends React.Component {
    /**
     * Initializes a new instance of FormDesigner
     * @param {*} props 
     */
    constructor(props)  {
        super(props);

        // derive state from props
        this.setStateFromProps(props);
        // bind event handlers
        this.bindEventHandlers();
        // create event emitter and bind event handlers
        this.setupDispatcher();
    }

    /**
     * Set component state derived from props and additional properties
     * @param {*} props 
     */
    setStateFromProps(props) {
        this.state = Object.assign(
                                    {},
                                    props,
                                    {
                                        selection:{
                                                    select: false, 
                                                    id:'',
                                                    rowId:'',
                                                    getSelectedControl: this.getSelectedControl.bind(this)
                                                  },
                                        showEditForm: false
                                    });
        this.rowIndex = 0;
    }

    /**
     * Bind event handlers
     */
    bindEventHandlers() {
        this.onFormNameChange = this.onFormNameChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.onSave = this.onSave.bind(this);
        this.showEditFormProperties = this.showEditFormProperties.bind(this);
        this.onAddControl = this.onAddControl.bind(this);
        this.onSelectControl = this.onSelectControl.bind(this);
        this.onPropertyChange = this.onPropertyChange.bind(this);
        this.onValidatorChange = this.onValidatorChange.bind(this);
        this.onDeleteRow = this.onDeleteRow.bind(this);
        this.onEditFormProperties = this.onEditFormProperties.bind(this);
    }

    /**
     * Sets up dispatchers.
     */
    setupDispatcher() {
        this.eventEmitter = new EventEmitter('Form Designer',true);
        this.eventEmitter.on(Actions.FormNameChange, this.onFormNameChange);
        this.eventEmitter.on(Actions.AddRow, this.addRow);
        this.eventEmitter.on(Actions.Save, this.onSave);
        this.eventEmitter.on(Actions.ShowEditFormProperties, this.showEditFormProperties);
        this.eventEmitter.on(Actions.AddControl, this.onAddControl);
        this.eventEmitter.on(Actions.SelectControl, this.onSelectControl);
        this.eventEmitter.on(Actions.PropertyChange, this.onPropertyChange);
        this.eventEmitter.on(Actions.ValidatorChange, this.onValidatorChange);
        this.eventEmitter.on(Actions.DeleteRow, this.onDeleteRow);
        this.eventEmitter.on(Actions.EditFormProperties, this.onEditFormProperties);
    }

    

    /**
     * Prop types for Form Designer component
     */
    static propTypes = {
        /**
         * Form Definition JSON
         */
        formDefinition: PropTypes.object.isRequired,
        /**
         * true for setting dev mode else false
         */
        devMode: PropTypes.bool,
        /**
         * Callback function which will be invoked on saving the form
         */
        onSave: PropTypes.func,
        /**
         * Callback function which will be invoked forevery change
         */
        onFormChange: PropTypes.func,
        /**
         * Callback function which will be invoked when user wants to see the form preview
         */
        onPreview: PropTypes.func,
        /**
         * Callback function which will be invoked on publishing the form
         */
        onPublish: PropTypes.func
    };

    /**
     * Default value for props
     */
    static defaultProps = {
        formDefinition: {},
        devMode: false
    };

    /**
     * Component lifecycle function invoked when the component DOM is mounted
     */
    componentDidMount() {
        // Bind event listeners
    }

    /**
     * Component lifecycle function invoked when the component is removed from DOM
     */
    componentWillUnmount() {
        // unind event listeners
    }

    /**
     * React invokes this function to render the component's UI
     */
    render() {
        const context = this.getContext();

        return (
            <FormDesignerContext.Provider value={context}>  
                <div className={styles.formDesigner}>
                        <FormDesignerAppBar />
                        <FormDesignerCenterContent />
                  
                    <div className={styles.fdFooter}>
                        FD Footer goes here
                    </div>
                    <EditFormProperties open={this.state.showEditForm}
                                        formData={this.state.formDefinition.formProperties}
                                        showFullScreen ={true}
                                        onEditFormProperties={this.onEditFormProperties}/>
                </div>
            </FormDesignerContext.Provider>
        );
    }

    /**
     * Reducer function invoked when onFormNameChange action is dispatched
     * @param {*string} name - Form name
     */
    onFormNameChange(name) {
        console.log(name);
    }

    /**
     * Reducer function invoked when a addRow action is dispatched
     * @param {*} event 
     */
    addRow(event) {
        this.setState((prevState) => {
            var rows = prevState.formDefinition.rows == null ? {} : prevState.formDefinition.rows;
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {rows: Object.assign({}, {...rows},this.getNewRow())}
                                            )
            };
        });
    }

    /**
     * Reducer function invoked when a onSave action is dispatched
     * @param {*} event 
     */
    onSave(event) {
        if(this.props.onSave){
            this.props.onSave(this.state.formDefinition);
        }
    }

    /**
     * Reducer function invoked when a onEditFormProperties action is dispatched
     * @param {*} event 
     */
    showEditFormProperties(event) {
        this.setState({showEditForm: true});
    }

    /**
     * Reducer function invoked when a onAddField action is dispatched
     * @param {*Row} row - Row to which the field has been added
     * @param {*} field - Control to be added to the row in the form
     */
    onAddControl({row, control}) {
        // Construct a new field/widget object based on the type
        const newControlField = this.getNewControl(control);
        // set state
        this.setState((prevState) => {
            var existingRow = prevState.formDefinition.rows[row.id];
            var controls = Object.assign({}, {...existingRow.fields}, newControlField);
            var clonedRow = Object.assign({}, existingRow,{fields: controls});
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {rows: Object.assign({}, {...prevState.formDefinition.rows},{[row.id]: clonedRow})}
                                            )
            };
        });
    }

    /**
     * Reducer function invoked when a onSelectControl action is dispatched
     * @param {*} param0 
     */
    onSelectControl({row, control}) {
        // {selection:{select: false, id:''}}
        this.setState((prevState) => {
            const select = {select: true, id: control.systemId, rowId: row.id};
            return {
                selection: Object.assign({}, prevState.selection,select)
            }
        });
    }

    /**
     * Reducer function invoked when a onPropertyChange action is dispatched
     * @param {*} param0 
     */
    onPropertyChange({row,control,value,name, advanced}) {
        this.setState((prevState) => {
            var newControlField;
            // get the field first from the state
            var stateField = prevState.formDefinition.rows[row].fields[control.systemId];
            if(advanced) {
                var properties = Object.assign({}, stateField.properties, {[name] : value});
                newControlField = Object.assign({}, stateField, {properties: properties});
            }else{
                newControlField = Object.assign({}, stateField, {[name]: value});
            }
            var existingRow = prevState.formDefinition.rows[row];
            var controls = Object.assign({}, {...existingRow.fields}, {[stateField.systemId]: newControlField});
            var clonedRow = Object.assign({}, existingRow,{fields: controls});
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {rows: Object.assign({}, {...prevState.formDefinition.rows},{[row]: clonedRow})}
                                            )
            };
        });
    }

    onValidatorChange({row,control,value,name}){
        this.setState((prevState) => {
            // get the field first from the state
            var stateField = prevState.formDefinition.rows[row].fields[control.systemId];
            var validators = Object.assign({}, stateField.validators, {[name] : value});
            var newControlField = Object.assign({}, stateField, {validators: validators});
            var existingRow = prevState.formDefinition.rows[row];
            var controls = Object.assign({}, {...existingRow.fields}, {[stateField.systemId]: newControlField});
            var clonedRow = Object.assign({}, existingRow,{fields: controls});
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {rows: Object.assign({}, {...prevState.formDefinition.rows},{[row]: clonedRow})}
                                            )
            };
        });
    }

    /**
     * Reducer function invoked when a row delete action is dispatched
     * @param {*} row - Row to be deleted 
     */
    onDeleteRow({row}) {
        this.setState((prevState) => {
            const rows = prevState.formDefinition.rows;
            var filteredRows = Object.keys(rows)
                                     .filter( rowId => rowId !== row.id)
                                     .reduce((accumulator,rowId) => {
                                         accumulator[rowId] = rows[rowId]
                                         return accumulator;
                                     },{});
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {rows: Object.assign({}, {...filteredRows})}
                                            )
            };
        });
    }

    /**
     * Event handler when form properties are saved by the user
     * @param {*} formProperties 
     */
    onEditFormProperties({formData,isCancel}) {
        if(isCancel){
            this.setState({showEditForm: false});
            return;
        }
        this.setState((prevState) => {
            return {
                formDefinition: Object.assign(
                                              {},
                                              prevState.formDefinition,
                                              {formProperties: Object.assign({}, formData)}
                                            ),
                showEditForm: false
            };
        });
    }

    /**
     * Creates Form Designer context object
     */
    getContext() {
        return {
            state : this.state,
            eventEmitter: this.eventEmitter,
            strings: Strings
        };
    }

    /**
     * Creates a new row object to be added to form definition
     */
    getNewRow() {
        // Get the unique rowid
        const rowId = IdService.getUniqueId();
        return {
            [rowId]: {
                id: rowId,
                index: this.rowIndex++,
                fields:{}
            }
        };
    }

    getNewControl(control) {
        const fieldId = IdService.getUniqueId();
        let newControlValues = FieldFactory.getControlSeed(control)
        return {
            [fieldId] : {systemId:fieldId, ...newControlValues}
        };
    }

    getSelectedControl() {
        const selection = this.state.selection;
        const rows = this.state.formDefinition.rows;
        return selection.id === '' ?
                      null :
                      rows[selection.rowId] == null ? null : rows[selection.rowId].fields[selection.id]
    }
}