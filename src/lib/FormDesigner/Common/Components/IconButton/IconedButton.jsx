import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const IconedButton = (props) => {
    return (
        <Tooltip title={props.label} placement="right">
            <IconButton aria-label={props.label} onClick={(event) => props.onClick(event)}>
                {props.children}
            </IconButton>
        </Tooltip>
    );
};



IconedButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.element.isRequired,
    label: PropTypes.string
};

export default IconedButton;


