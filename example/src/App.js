import React, { Component } from 'react'

import {DCNMInput} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
        <DCNMInput label="Label" validated value="This is a valid value"/>
      </div>
    )
  }
}
