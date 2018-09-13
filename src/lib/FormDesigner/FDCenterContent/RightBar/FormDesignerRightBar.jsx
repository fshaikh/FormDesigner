import React from 'react';

import TabbedContainer from '../../Common/Components/TabbedContainer/TabbedContainer'
import EmptyComponent from '../../Common/Components/EmptyComponent';
import CommonPropertyPane from './FieldPropertyPane/CommonPropertyPane';
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
                    
                const tabs = [
                        {
                            label: context.strings.Common,
                            component: <CommonPropertyPane control={selectedControl}
                                                           onPropertyChange={(name, control,value)=> context.eventEmitter.dispatch(Actions.PropertyChangeAction(context.state.selection.rowId,control,value,name))} />
                        },
                        {
                            label: context.strings.Advanced,
                            component: <EmptyComponent message='Coming soon' />
                        },
                        {
                            label: context.strings.Validators,
                            component: <EmptyComponent message='Coming soon' />
                        }
                    ];
                    return <TabbedContainer tabs={tabs} />
                }
            }
        </FormDesignerContext.Consumer>
    );
};

export default FormDesignerRightBar;