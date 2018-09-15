import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Row.module.css';
import EmptyRowView from './EmptyRowView';
import FieldsPlaceholder from './Field/FieldsPlaceholder';
import IconedButton from '../../../Common/Components/IconButton/IconedButton';

const Row = ({row, onControlAdded , onRowDeleted}) => {
    return (
        <Paper elevation={1} className={styles.row}
               onDragOver={(event)=> handleDragOver(event , row)}
               onDragEnter={(event)=> handleDragOver(event, row)}
               onDrop={(event) =>   handleOnDrop(event, row, onControlAdded) }               
               draggable="true">
            { 
                
                isRowEmpty(row)? 
                    <EmptyRowView /> :
                    <FieldsPlaceholder row={row} fields={row.fields} />
            }
            <IconedButton className={styles.delete}
                        onClick={(event) => {onRowDeleted(event, row)}}
                        label="Delete" >
                <DeleteIcon/>
            </IconedButton>
        </Paper>
    );
};

/**
 * 
 * @param {*SyntheticEvent} e - Event
 * @param {*Row} row - Row being dropped over
 */
const handleDragOver = (e, row) => {
    // By cancelling this event, we’re telling the browser this element that we’re over
    // is the one you can release and drop upon.
    if(allowDrop(row)) {
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
    return true;
}

/**
 * Event handler for onDrop called when a field is dropped to the row
 * @param {* SyntheticEvent} event 
 * @param {*Row } row 
 * @param {* Func} onFieldAdded 
 */
const handleOnDrop = (event, row, onControlAdded) => {
    if (event.stopPropagation) {
        event.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Retreive the data form the drag source
    const control = JSON.parse(event.dataTransfer.getData('application/json'));
    // invoke the parents passed in callback prop
    onControlAdded(row, control);
    return true;
}
/**
 *  Do not allow drop if any of the following conditions are met:
        1. Row has 1 field
        2. Row has a field whose layout type is span - TBD
 */
const allowDrop = (row) => {
    return isRowEmpty(row);
}

/**
 * Returns true if the row is empty, else false
 * @param {*Row} row 
 */
const isRowEmpty = (row) => {
    return (row.fields == null || Object.keys(row.fields).length === 0);
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
    onControlAdded: PropTypes.func.isRequired
};

export default Row;


