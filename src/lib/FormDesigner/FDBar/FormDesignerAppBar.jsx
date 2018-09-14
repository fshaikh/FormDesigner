/**
 * React specific imports
 */
import React from 'react';

/**
 * MAterial UI specific imports
 */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



/**
 * Library specific imports
 */
import FormName from './FormName/FormName';
import ActionBar from './ActionBar/ActionBar';
import styles from './FormDesignerAppBar.module.css';



/**
 * Presentation coponent which implements the Top Bar for the Form Designer
 * @param {*} props 
 */

const FormDesignerAppBar = (props) => {
    
    return (
        <div className={styles.appBar}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <FormName />
                    <div className={styles.space} />
                    <ActionBar />
                </Toolbar>
            </AppBar>
        </div>
        
    );
};

export default FormDesignerAppBar;