Form Designer
===============================

A [React](http://facebook.github.io/react/) component for an intuitive, drag-and-drop based, meta-based Form Designer.

## Table of Contents
- [Installation](#installation)
    - [As a npm-based project dependency]
    (#as-a-npm-based-project-dependency)
- [Usage](#usage)
    - [New Mode](#new-mode)


## Installation

Requires React 16.0.0+.

### As a npm-based project dependency

```
$ npm install @reversecurrent/formdesigner --save
```

## Usage

### New Mode
```jsx
import React, { Component } from "react";
import { render } from "react-dom";

import '@reversecurrent/formdesigner/FormDesigner.css'
import FormDesigner from '@reversecurrent/formdesigner/FormDesigner'.FormDesigner

render((
  <FormDesigner formDefinition={this.schema} 
                onSave = { (formDefinition) => console.log(formDefinition)} />
), document.getElementById("app"));
```

![](https://youtu.be/wPjNyf_8Zl4)

