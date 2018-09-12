import React from 'react';
import PropTypes from 'prop-types';
import {fieldIconMapping} from '../../../../Common/Components/Icons'
import ListItemIcon from '@material-ui/core/ListItemIcon';


const FieldControlItemIcon = ({type}) => {
    return (
               <ListItemIcon>
                    {React.createElement(fieldIconMapping[type])}
                </ListItemIcon>
           );
}

export default FieldControlItemIcon;

FieldControlItemIcon.propTypes = {
    type: PropTypes.string.isRequired,
};