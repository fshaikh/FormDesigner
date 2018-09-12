import React from 'react';

import FormDesignerContext from '../../Store/FormDesignerContext';
import EmptyView from './EmptyView/EmptyView';
import Row from './Row/Row';
import styles from './DesignerSurface.module.css';
import * as Actions from '../../Actions/Actions';

export default class DesignerSurface extends React.Component {
    constructor(props) {
        super(props);
        this.context = null;
        this.onControlAdded = this.onControlAdded.bind(this);
    }

    render() {
        return (
            <div>
                <FormDesignerContext.Consumer>
                    { (context) => {
                            this.context = context;
                            var rows = context.formDefinition.rows;
                            if(rows == null) {
                                return <EmptyView />
                            }

                            return Object.keys(rows).map((rowId) => {
                                return <Row key={rowId}
                                            row={rows[rowId]}
                                            onControlAdded={this.onControlAdded}  />
                            });
                        }
                    }
                </FormDesignerContext.Consumer>
            </div>
        );
    }

    onControlAdded(row, control) {
        this.context.eventEmitter.dispatch(Actions.AddControlAction(row, control));
    }
}