import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import IconedButton from '../../Components/IconButton/IconedButton';
import styles from './ArrayFieldItems.module.css'

const ArrayFieldItems = (props) => {
    return (
            <List component="nav">
                {props.values.map((value) => {
                    let context = value;
                    return (
                        <React.Fragment>
                            <ListItem key={value} > 
                                <Paper className={styles.list} onClick={(event) => props.onSelect(event,context)}>
                                    <p className={styles.itemText}>{value}</p>
                                    <IconedButton label="Delete" className={styles.item}
                                                  onClick={event => {event.stopPropagation(); props.onRemove(event,context)}}>
                                        <DeleteIcon />
                                    </IconedButton>
                                </Paper>
                            </ListItem>
                            <Divider/>
                        </React.Fragment>
                    );
                })}
            </List>
    );
};

ArrayFieldItems.propTypes = {
    values: PropTypes.array.isRequired,
    onRemove: PropTypes.func,
    onSelect: PropTypes.func
}

export default ArrayFieldItems