import React from 'react';
import ReactDOM from 'react-dom';
import  styles from './index.module.css';
import {FormDesigner} from './lib/FormDesigner/index';
const schema = require('./formSchema.json');

ReactDOM.render(<FormDesigner onSave={(formDefinition) => console.log(JSON.stringify(formDefinition))} devMode={true}/>, document.getElementById('root'));

