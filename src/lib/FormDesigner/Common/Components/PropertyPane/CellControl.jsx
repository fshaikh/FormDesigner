import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import FieldControlsEnum from '../../../Common/Models/FieldControlsEnum';
import Checkbox from '@material-ui/core/Checkbox';

const CellControl = (props) => {
     var Control = getControl(props);
      return(
            Control
        );
};

const getControl = (props) => {
        return <TextField defaultValue={props.value}
                              onChange={(event) => props.onPropertyChange(event.target.value)} />;

}

CellControl.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number
    ]).isRequired,
    type: PropTypes.string.isRequired,
    onPropertyChange: PropTypes.func.isRequired
};

CellControl.defaultProps = {
    value: ''
}

export default CellControl;

