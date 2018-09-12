/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Material UI specific imports
 */
import Button from '@material-ui/core/Button';



 /**
  * Lib specific imports
  */
  import FormDesignerContext from '../../../Store/FormDesignerContext'


  /**
   * Presentational component for representing action buttons in form designer
   * @param {*object} props 
   */
const ActionButton = (props) => {
    return (
        <FormDesignerContext.Consumer>
            {(context) => {
               return <Button variant="contained" size="medium" color="default" aria-label="Add"
                              onClick={(event) => context.eventEmitter.dispatch(props.action(event))}>
                             {props.title} 
                      </Button>
            }}
            
        </FormDesignerContext.Consumer>
    );
};

ActionButton.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default ActionButton;