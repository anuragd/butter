# dcn-ux-resources

> 

[![NPM](https://img.shields.io/npm/v/dcn-ux-resources.svg)](https://www.npmjs.com/package/dcn-ux-resources) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Library containing React components and LESS mixins based on the following Style Guide: https://xd.adobe.com/view/0b45c23e-341f-471f-6e07-a666f064272d-7d74/

## Install

```bash
cd <path-to-ux-folder>
npm link
cd <path-to-your-project>
npm link dcn-ux-resources
```

## Usage
```js
import React, { Component } from 'react'

import {components} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div className="kitchen_sink">
      	<components.Radio 
      		label="Select an option"
      		options={[
      			{id:0,value:"Option 1"},
      			{id:1,value:"Option 2", disabled: true},
      			{id:2,value:"Option 3"},
      			{id:3,value:"Option 4"}]}
      		/>
      	<components.Dropdown 
      		label="Select" 
      		options={[
      			{id:0,value:"Option 1"},
      			{id:1,value:"Option 2", disabled: true},
      			{id:2,value:"Option 3"},
      			{id:3,value:"Option 4"}]}
      		/>
        <components.Input label="Input" />
        <components.Button label="Button"/>
        <components.TextArea label="TextArea"/>
      </div>
    )
  }
}
```

## Fonts and Styles
To include CiscoSansTT fonts, setup your webpack to import the contents of the `assets` folder, available in your `node_modules\dcn-ux-resources\dist` folder, into your project's build
To use the Grid System and LESS mixins available in the UX library, setup your webpack to import the `dcn-ux.less` file in your project. This file is available under the `node_modules\dcn-ux-resources\dist` as well

## Documentation
To view from a temporary web server the documentation, you can run the following script:
```js
npm run doc:serve
```
After running this command, documentation will be available at http://localhost:6060

To build the documentation into files that can be hosted on a separate web-server, run
```js
npm run doc:build
```

## License

MIT © [](https://github.com/)
