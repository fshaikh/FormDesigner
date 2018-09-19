import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from './Choice.module.css';

const Choice = (props) => {
    return (
        <Select classes={{root: styles.select}}
            value={props.selectedValue}
            onChange={(event) => props.onChange(event.target.value)}
        >
        {props.values.map((choice) => {
            return <MenuItem key={choice.key}
                             value={choice.key}>{choice.value}
                   </MenuItem>
        })}
    </Select>
    );
};

Choice.propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        value: PropTypes.string.isRequired
    }))
    .isRequired,
    selectedValue: PropTypes.any,
    onChange: PropTypes.func
};
export default Choice;