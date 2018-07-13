import React, { Component } from 'react'

import {components} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
        <components.Input label="Label" disabled/>
        <components.Button label="Button" disabled/>
      </div>
    )
  }
}
