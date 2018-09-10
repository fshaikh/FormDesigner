/**
 * React specific imports
 */
import React from 'react';

/**
 * MAterial UI specific imports
 */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';

/**
 * Library specific imports
 */
import FormName from './FormName/FormName';

/**
 * Presentation coponent which implements the Top Bar for the Form Designer
 * @param {*} props 
 */
const FormDesignerAppBar = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        <FormName />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        
    );
};

export default FormDesignerAppBar;