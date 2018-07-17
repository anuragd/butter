import React, { Component } from 'react'

import {components} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
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
