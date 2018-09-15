import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';


import styles from './Field.module.css'
import {fieldIconMapping} from '../../../../Common/Components/Icons'
import FormDesignerContext from '../../../../Store/FormDesignerContext';
import * as Actions from '../../../../Actions/Actions'

const Field = ({row, field}) => {
    
    return (
        <FormDesignerContext.Consumer>
            {(context) => {
                const classes = [styles.field, context.state.selection.id === field.systemId ? styles.selected: styles.normal].join(' ');
                return (
                    <Paper className={classes}
                           onClick={(event) => context.eventEmitter.dispatch(Actions.SelectControlAction(row, field))}>
                        {React.createElement(fieldIconMapping[field.type])}
                        <span>{field.label}</span>
                        
                    </Paper>
                );
            }
            }
        </FormDesignerContext.Consumer>
    );
};

Field.propTypes = {
    row: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired
};

export default Field;


