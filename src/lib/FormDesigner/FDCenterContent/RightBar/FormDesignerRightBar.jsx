import React from 'react';

import TabbedContainer from '../../Common/Components/TabbedContainer/TabbedContainer'
import EmptyComponent from '../../Common/Components/EmptyComponent';
import CommonPropertyPane from './FieldPropertyPane/CommonPropertyPane';
import AdvancedPropertyPane from './FieldPropertyPane/AdvancedPropertyPane';
import ValidatorPropertyPane from './FieldPropertyPane/Validators/ValidatorPropertyPane'
import FormDesignerContext from '../../Store/FormDesignerContext';
import * as Actions from '../../Actions/Actions';

const FormDesignerRightBar = () => {
    return (
        <FormDesignerContext.Consumer>
            {(context) => {
                const selectedControl = context.state.selection.getSelectedControl();
                if(!selectedControl){
                    return '';
                }
                const rowId = context.state.selection.rowId;
                // Define child components here. These are the components to be rendered in tabbed container
                const tabs = [
                        {
                            label: context.strings.Common,
                            component: <CommonPropertyPane control={selectedControl}
                                                           onPropertyChange={(name, control,value)=> context.eventEmitter.dispatch(Actions.PropertyChangeAction(rowId,control,value,name))} />
                        },
                        {
                            label: context.strings.Advanced,
                            component: <AdvancedPropertyPane control={selectedControl}
                                                             onPropertyChange={(name, control,value)=> context.eventEmitter.dispatch(Actions.PropertyChangeAction(rowId,control,value,name, true))} />
                        },
                        {
                            label: context.strings.Validators,
                            component: <ValidatorPropertyPane control={selectedControl}
                                                              onPropertyChange={(control,value,name)=>context.eventEmitter.dispatch(Actions.ValidatorChangeAction(rowId,control,value,name))} />
                        }
                    ];
                    return <TabbedContainer tabs={tabs} />
                }
            }
        </FormDesignerContext.Consumer>
    );
};

export default FormDesignerRightBar;