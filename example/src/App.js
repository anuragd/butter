import React, { Component } from 'react'

import {components} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
<<<<<<< HEAD
        <components.Input label="Input" invalid="This is an error message" value="Error"/>
        <components.Button label="Button"/>
        <components.TextArea label="TextArea" invalid="This is an error message"/>
=======
      	<components.Dropdown label="Select" options={[{id:0,value:"Option 1"},{id:1,value:"Option 2"},{id:2,value:"Option 3"},{id:3,value:"Option 4"}]}/>
        <components.Input label="Input"/>
        <components.Button label="Button"/>
        <components.TextArea label="TextArea"/>
>>>>>>> 82b830b6ab8cc4380544fecd7196338a46c242b9
      </div>
    )
  }
}
