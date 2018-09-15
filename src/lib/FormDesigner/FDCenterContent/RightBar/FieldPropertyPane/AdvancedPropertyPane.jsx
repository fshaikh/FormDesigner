import React from 'react';
import PropTypes from 'prop-types';

import PropertyPane from '../../../Common/Components/PropertyPane/PropertyPane'


const AdvancedPropertyPane = ({control , onPropertyChange}) => {
    const id = control.systemId;
    const rows = Object.keys(control.properties)
                        .map((key) => {
                              return {
                                        name: key,
                                        value: control.properties[key],
                                        id: `${id}-${key}`,
                                        meta: control.meta[key]
                                    }
                        });
                
    
    return (   
        <PropertyPane rows={rows}
                      columns={['Property Name', 'Property Value']}
                      onPropertyChange={(name, value) => onPropertyChange(name, control , value)}/>
    );
};

AdvancedPropertyPane.propTypes = {
    control: PropTypes.object.isRequired
};
export default AdvancedPropertyPane;