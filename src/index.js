import React from 'react';
import ReactDOM from 'react-dom';
import  styles from './index.module.css';
import FormDesigner from './lib/FormDesigner/FormDesigner'

ReactDOM.render(<FormDesigner onSave={(formDefinition) => console.log(formDefinition)}/>, document.getElementById('root'));

