import React from 'react';

import TabbedContainer from '../../Common/Components/TabbedContainer/TabbedContainer'
import FieldControlPane from './FieldControlPane/FieldControlPane'
import EmptyComponent from '../../Common/Components/EmptyComponent';

const FormDesignerSideBar = () => {
    const tabs = [
        {
            label: "Basic",
            component: <FieldControlPane />
        },
        {
            label: "Widgets",
            component: <EmptyComponent message='Coming soon' />
        }
    ]
    return (
        <TabbedContainer tabs={tabs} />
    );
};

export default FormDesignerSideBar;