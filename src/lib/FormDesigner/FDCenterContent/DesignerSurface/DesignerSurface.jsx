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
        this.onRowDeleted = this.onRowDeleted.bind(this);
    }

    render() {
        return (
            <div className={styles.designerSurface}>
                <FormDesignerContext.Consumer>
                    { (context) => {
                            this.context = context;
                            var rows = context.state.formDefinition.rows;
                            if(rows == null || Object.keys(rows).length === 0) {
                                return <EmptyView />
                            }

                            return Object.keys(rows).map((rowId) => {
                                return <Row key={rowId}
                                            row={rows[rowId]}
                                            onControlAdded={this.onControlAdded}
                                            onRowDeleted={this.onRowDeleted}  />
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

    onRowDeleted(event, row) {
        this.context.eventEmitter.dispatch(Actions.DeleteRowAction(row));
    }
}