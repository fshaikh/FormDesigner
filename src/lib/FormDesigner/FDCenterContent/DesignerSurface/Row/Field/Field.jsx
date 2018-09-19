import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';


import styles from './Field.module.css'
import {fieldIconMapping} from '../../../../Common/Components/Icons'
import FormDesignerContext from '../../../../Store/FormDesignerContext';
import * as Actions from '../../../../Actions/Actions';
import RowType from '../../../../Common/Models/RowType';

const Field = ({row, field}) => {
    
    return (
        <FormDesignerContext.Consumer>
            {(context) => {
                return (
                    <Paper className={getClasses(row,field,context)}
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

const getClasses = (row,field,context) => {
    return [
        styles.field,
        context.state.selection.id === field.systemId ? styles.selected: styles.normal//,
        //field.layoutType === RowType.Span ? styles.span : field.layoutType === RowType.Left ? styles.left : styles.right
    ].join(' ');
}

Field.propTypes = {
    row: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired
};

export default Field;


