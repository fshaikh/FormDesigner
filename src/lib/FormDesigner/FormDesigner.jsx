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

        // create event emitter and bind event handlers
        this.setupDispatcher();
        // bind event handlers
        this.bindEventHandlers();
        
    }

    /**
     * Sets up dispatchers.
     */
    setupDispatcher() {
        this.eventEmitter = new EventEmitter('Form Designer');
        this.eventEmitter.on(Actions.FormNameChange, this.onFormNameChange);
    }

    /**
     * Bind event handlers
     */
    bindEventHandlers() {
        this.onFormNameChange = this.onFormNameChange.bind(this);
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
                        FD Main goes here
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
     * Creates Form Designer context object
     */
    getContext() {
        return {
            formDefinition : this.state.formDefinition,
            eventEmitter: this.eventEmitter,
            strings: Strings
        };
    }

}