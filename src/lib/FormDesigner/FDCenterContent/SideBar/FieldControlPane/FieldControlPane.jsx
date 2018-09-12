import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import FieldControlItem from './FieldControl/FieldControlItem';
import {FieldControls} from '../../../Store/FieldControls';

const FieldControlPane = () => {
    return (
        <div>
            <List component="nav">
                {FieldControls.map((fieldControl) => {
                    return (
                    <React.Fragment key={fieldControl.type} >
                        <FieldControlItem type={fieldControl.type}
                                          label={fieldControl.label} />
                        <Divider />
                    </React.Fragment>
                    );
                })}
                
            </List>
      </div>
    );
}

export default FieldControlPane;