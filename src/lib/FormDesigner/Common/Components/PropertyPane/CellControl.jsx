import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import SystemTypes from '../../../Common/Models/SystemTypes';
import Checkbox from '@material-ui/core/Checkbox';
import ArrayField from '../ArrayField/ArrayField';
import Choice from '../Choice/Choice';

const CellControl = (props) => {
     var Control = getControl(props);
      return(
            Control
        );
};

const getControl = (props) => {
        const InputField = <TextField defaultValue={props.value}
                                      onChange={(event) => props.onPropertyChange(event.target.value)}
                                      type={props.type === SystemTypes.string ? 'text' : 'number'} />
        switch(props.type) {
            case SystemTypes.string:
                return InputField;
            case SystemTypes.boolean:
                return <Checkbox checked={props.value}
                                 onChange={(event) => props.onPropertyChange(event.target.checked)} />
            case SystemTypes.array:
                return <ArrayField values={props.value} 
                                   onChange={(values) => props.onPropertyChange(values)}/>
            case SystemTypes.choice:
                return <Choice selectedValue={props.value} values={props.values}
                               onChange={(values) => props.onPropertyChange(values) }/>
            default:
                return InputField;
        }
        

}

CellControl.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
        PropTypes.array
    ]).isRequired,
    values: PropTypes.array,
    type: PropTypes.string.isRequired,
    onPropertyChange: PropTypes.func.isRequired
};

CellControl.defaultProps = {
    value: ''
}

export default CellControl;

