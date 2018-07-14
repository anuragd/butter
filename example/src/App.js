import React, { Component } from 'react'

import {components} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
        <components.Input label="Input" invalid="This is an error message"/>
        <components.Button label="Button"/>
        <components.TextArea label="TextArea" invalid="This is an error message"/>
      </div>
    )
  }
}
