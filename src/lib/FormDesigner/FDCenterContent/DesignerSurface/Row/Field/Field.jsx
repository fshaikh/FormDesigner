import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ShortTextIcon from '@material-ui/icons/Input';

import styles from './Field.module.css'
import {fieldIconMapping} from '../../../../Common/Components/Icons'
import FormDesignerContext from '../../../../Store/FormDesignerContext';
import * as Actions from '../../../../Actions/Actions'

const Field = ({row, field}) => {
    return (
        <FormDesignerContext.Consumer>
            {(context) => {
                return (
                    <Paper className={styles.field}
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


