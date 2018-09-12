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
        this.state = Object.assign({}, props);

        // bind event handlers
        this.bindEventHandlers();
        // create event emitter and bind event handlers
        this.setupDispatcher();
        
        
    }

    /**
     * Bind event handlers
     */
    bindEventHandlers() {
        this.onFormNameChange = this.onFormNameChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onAddControl = this.onAddControl.bind(this);
        this.onSelectControl = this.onSelectControl.bind(this);
    }

    /**
     * Sets up dispatchers.
     */
    setupDispatcher() {
        this.eventEmitter = new EventEmitter('Form Designer');
        this.eventEmitter.on(Actions.FormNameChange, this.onFormNameChange);
        this.eventEmitter.on(Actions.AddRow, this.addRow);
        this.eventEmitter.on(Actions.Save, this.onSave);
        this.eventEmitter.on(Actions.AddControl, this.onAddControl);
        this.eventEmitter.on(Actions.SelectControl, this.onSelectControl);
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
                    <div className={styles.fdBar}>
                        <FormDesignerAppBar />
                    </div>
                    <div className={styles.fdMain}>
                        <FormDesignerCenterContent />
                    </div>
                    <div className={styles.fdFooter}>
                        FD Footer goes here
                    </div>
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
        console.log(this.state);
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

    onSelectControl({row, control}) {
        console.log(control)
    }

    /**
     * Creates Form Designer context object
     */
    getContext() {
        return {
            formDefinition : this.state.formDefinition,
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

}