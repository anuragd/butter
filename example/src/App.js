import React, { Component } from 'react'

import {Input} from 'dcn-ux-resources'

export default class App extends Component {
  render () {
    return (
      <div>
        <Input label="Label" validated value="This is a valid value"/>
      </div>
    )
  }
}
