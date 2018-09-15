import React from 'react';
import PropTypes from 'prop-types';

import styles from './FieldsPlaceholder.module.css';
import Field from './Field'

const FieldsPlaceholder = ({row , fields}) => {
    return (
        <div className={styles.fieldsPlaceholder}>
            {Object.keys(fields).map((key) => {
                const field = fields[key];
                return <Field row={row} field={field} key={key}/>
            })}
        </div>
    );
};

FieldsPlaceholder.propTypes = {
    row: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired
};

export default FieldsPlaceholder;


