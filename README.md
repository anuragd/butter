# dcn-network-insights-ux

Library containing React components and LESS mixins based on the following Style Guide: https://xd.adobe.com/view/0b45c23e-341f-471f-6e07-a666f064272d-7d74/

## Pre-requisite
1. Clone work repo, e.g. https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/DCA/repos/dcn-network-insights-resources/browse
2. Run, npm install

## Install
1. Clone this repo, i.e. https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/DCA/repos/dcn-network-insights-ux/browse
2. Open up the command line and do the following
```bash static
cd <YOUR_WORK_DIR>/dcn-network-insights-ux
npm link
cd <YOUR_WORK_DIR>/<YOUR_PROJECT_REPO_WORK_DIR>, e.g. <YOUR_WORK_DIR>/dcn-network-insights-resources/ui
npm link dcn-network-insights-ux
```

## Usage
```js static
import React, { Component } from 'react'

import { Radio, Dropdown, Input, Button, TextArea, NoDataPanel, ProgressBar, ProgressBarMini } from 'dcn-network-insights-ux'

export default class App extends Component {
  render () {
    return (
      <div className="kitchen_sink">
        <ProgressBarMini progress="50"/>
        <Radio 
          label="Select an option"
          options={[
            {id:0,value:"Option 1"},
            {id:1,value:"Option 2", disabled: true},
            {id:2,value:"Option 3"},
            {id:3,value:"Option 4"}]}
          />
        <Dropdown 
          label="Select" 
          options={[
            {id:0,value:"Option 1"},
            {id:1,value:"Option 2", disabled: true},
            {id:2,value:"Option 3"},
            {id:3,value:"Option 4"}]}
          />
        <Button label="Button"/>
        <div className=""><NoDataPanel /></div>
      </div>
    )
  }
}
```

## Update to latest version
1. Open up your command line and do the following:
```bash static
cd <YOUR_WORK_DIR/dcn-network-insights-ux
git pull
npm run build
```
This will auto update the library on your project

## Fonts and Styles
To include CiscoSansTT fonts, setup your webpack to import the contents of the `assets` folder, available in your `node_modules\dcn-network-insights-ux\dist` folder, into your project's build
To use the Grid System and LESS mixins available in the UX library, setup your webpack to import the `dcn-ux.less` file in your project. This file is available under the `node_modules\dcn-network-insights-ux\dist` as well

## Documentation
To view from a temporary web server the documentation, you can run the following script:
```js static
npm run doc:serve
```
After running this command, documentation will be available at http://localhost:6060

To build the documentation into files that can be hosted on a separate web-server, run
```js static
npm run doc:build
```

## Testing
To run tests, you can use thw following commands:
```bash
npm test
```
or
```bash
npm run test:watch
```

## License

MIT © [](https://github.com/)
