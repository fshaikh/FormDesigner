import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import IconedButton from '../../Components/IconButton/IconedButton';
import styles from './ArrayField.module.css';
import ArrayFieldItems from './ArrayFieldItems'

export default class ArrayField extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.index = -1;
        this.selectedValue = '';

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onAdd(){
        console.log(this.state)
        var value = this.inputRef.value;
        if(value === ''){
            return;
        }
        this.inputRef.value = '';
        this.props.onChange([...this.props.values,value])
    }

    onRemove(event,value) {
        this.props.onChange(this.props.values.filter(item => item !== value))
    }

    onSelect(event , value) {
        this.selectedValue = value;
        this.inputRef.value = value;
    }

    onChange(value) {
        if(this.selectedValue === '')
            return;
        this.props.onChange([...this.props.values.filter(item => item !== this.selectedValue),value]);
        this.selectedValue = value;
    }

    render() {
        return (
            <div>
                <div className={styles.top}>
                    <TextField inputRef={(refProperty) => this.inputRef = refProperty}
                               onChange={(event) => this.onChange(event.target.value)}
                               className={styles.textField}/>
                    <IconedButton label="Add New Item" className={styles.addBtn}
                                  onClick={event => this.onAdd()}>
                                <AddCircleIcon />
                    </IconedButton>
                </div>
                <ArrayFieldItems values={this.props.values}
                                     onRemove={(event, item) => this.onRemove(event, item)}
                                     onSelect={(event, item) => this.onSelect(event , item)} />
                
            </div>
        );
    }
};

ArrayField.propTypes = {
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func
};
