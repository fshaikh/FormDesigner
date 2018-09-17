import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import withBadge from '../Badge/Badge';

const IconedButton = (props) => {
    const Component = <Tooltip title={props.label} placement="right">
                        <IconButton aria-label={props.label} onClick={(event) => props.onClick(event)}>
                            {props.children}
                        </IconButton>
                     </Tooltip>
    return (
        props.badge == null ? Component : withBadge(Component,props.badge)
    );
};



IconedButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.element.isRequired,
    label: PropTypes.string,
    badge: PropTypes.object
};

export default IconedButton;


