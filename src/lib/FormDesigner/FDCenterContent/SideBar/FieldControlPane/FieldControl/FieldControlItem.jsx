import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/ArrowDropDownCircle';

import styles from './FieldControlItem.module.css';
import FieldControlItemIcon from './FieldControlItemIcon';
import {normalizedFieldControls} from '../../../../Store/FieldControls';


const FieldControlItem = ({type, label}) => {
    return (
                <ListItem draggable="true" 
                          data-control={type}
                          onDragStart={event => onDragStart(event)}
                          className={styles.fieldControlItem} >
                    <FieldControlItemIcon type={type} />
                    <ListItemText primary={label} />
                </ListItem>
        );
}

const onDragStart = (event) => {
    const fieldControl = event.target.attributes['data-control'].value;
    const data = normalizedFieldControls[fieldControl];
    event.dataTransfer.setData('application/json',JSON.stringify(data));
};

export default FieldControlItem;

FieldControlItem.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
};