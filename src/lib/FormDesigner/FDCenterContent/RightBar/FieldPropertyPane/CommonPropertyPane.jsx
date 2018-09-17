import React from 'react';
import PropTypes from 'prop-types';

import PropertyPane from '../../../Common/Components/PropertyPane/PropertyPane'


const CommonPropertyPane = ({control , onPropertyChange}) => {
    const id = control.systemId;
    const rows = Object.keys(control)
                        .filter((key) =>  control.meta[key].visible
                        )
                        .map((key) => {
                              return {
                                        name: key,
                                        value: control[key],
                                        id: `${id}-${key}`,
                                        label: control.meta[key].label,
                                        type: control.meta[key].type
                                    }
                        });   
    return (   
        <PropertyPane rows={rows}
                      columns={['Property Name', 'Property Value']}
                      onPropertyChange={(name, value) => onPropertyChange(name, control , value)}/>
    );
};

CommonPropertyPane.propTypes = {
    control: PropTypes.object.isRequired
};
export default CommonPropertyPane;