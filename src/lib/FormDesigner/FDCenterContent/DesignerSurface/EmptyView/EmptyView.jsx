import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import styles from './EmptyView.module.css'

/**
 * Represents the UI to be shown on the designer surface when there are no rows
 * @param {*} props 
 */
const EmptyView = (props) => {
    return (
        <Paper elevation={1} className={styles.container}>
            <Typography variant="headline" component="p">
                Click {<AddCircleIcon />} "Add Row" button from App Bar.
            </Typography>
            <Typography variant="headline" component="p">
                Drag form elements from left and drop on the row
            </Typography>
        </Paper>
    );
}
    
export default EmptyView;