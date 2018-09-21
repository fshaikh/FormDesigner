Form Designer
===============================

A [React](http://facebook.github.io/react/) component for an intuitive, drag-and-drop based, meta-based Form Designer.

## Table of Contents
- [Installation](#installation)
    - [As a npm-based project dependency]
    (#as-a-npm-based-project-dependency)
- [Usage](#usage)
    - [New Mode](#new-mode)
    - [Edit Mode](#edit-mode)


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
  <FormDesigner onSave = { (formDefinition) => console.log(formDefinition)} />
), document.getElementById("app"));
```

![](https://github.com/fshaikh/formDesigner/blob/master/resources/Screencast.gif)

### Edit Mode
```jsx
import React, { Component } from "react";
import { render } from "react-dom";

import '@reversecurrent/formdesigner/FormDesigner.css'
import FormDesigner from '@reversecurrent/formdesigner/FormDesigner'.FormDesigner

render((
  <FormDesigner formDefinition={schema} onSave = { (formDefinition) => console.log(formDefinition)} />
), document.getElementById("app"));
```

![](https://github.com/fshaikh/FormDesigner/blob/master/resources/EditMode.JPG)

