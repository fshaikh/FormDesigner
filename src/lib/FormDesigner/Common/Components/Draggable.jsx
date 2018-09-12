import React from 'react';

const Draggable = (WrappedComponent, data,onDragStart) => {
    return (
        <WrappedComponent 
            draggable="true"
            data-control={data}
            onDragStart = {(event) => onDragStart} />
    );
};

export default Draggable;