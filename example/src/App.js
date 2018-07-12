import React, { Component } from 'react'

import {DCNMInput} from 'dcnm_component_lib'

export default class App extends Component {
  render () {
    return (
      <div>
        <DCNMInput label="Label" validated/>
      </div>
    )
  }
}
