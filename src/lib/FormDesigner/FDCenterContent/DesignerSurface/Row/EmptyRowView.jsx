import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const EmptyRowView = () => {
    return (
        <Paper elevation={1}>
             <Typography variant="headline" component="p">
                  Drag form elements from left and drop on the row
             </Typography>
        </Paper>
    );
};


export default EmptyRowView;


