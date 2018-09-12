import React from 'react'
import PropTypes from 'prop-types';

const EmptyComponent = (props) => {
    return (
        <h2>{props.message}</h2>
    )
};

export default EmptyComponent;

EmptyComponent.propTypes = {
    message: PropTypes.string.isRequired
};

EmptyComponent.defaultProps = {
    message: 'Put some content here'
};