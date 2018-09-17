import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


import CellControl from './CellControl';
import styles from './PropertyPane.module.css';

const PropertyPane = (props) => {
    const CustomTableCell = withStyles(theme => ({
        head: {
          backgroundColor: '#f5f5f5',
          color: theme.palette.common.black,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);

      return(
            <Paper >
                <Table >
                <TableHead>
                    <TableRow>
                        {props.columns.map((column) => {
                             return <CustomTableCell key={column}>{column}</CustomTableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => {
                    return (
                        <TableRow className={styles.row} key={row.id} >
                            <TableCell onClick={(event) => {
                                if(props.onRowSelect){
                                    props.onRowSelect(row);
                                }
                            }}>
                                {row.label}
                            </TableCell>
                            <TableCell>
                                <CellControl value={row.value}
                                             type={row.type}
                                             onPropertyChange={(value) => props.onPropertyChange(row.name, value)} />
                            </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
        </Paper>
        );
};

PropertyPane.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.bool,
                PropTypes.number,
                PropTypes.array
            ]).isRequired,
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })).isRequired,
    columns: PropTypes.array.isRequired,
    onPropertyChange: PropTypes.func.isRequired,
    onRowSelect: PropTypes.func
};


export default PropertyPane;

