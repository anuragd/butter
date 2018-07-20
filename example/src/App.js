import React, { Component } from 'react'

import { Radio, Dropdown, Input, Button, TextArea, NoDataPanel, ProgressBar, ProgressBarMini } from 'dcn-ux-resources'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Test',
      textAreaValue:'',
      progress: 50
    }
  }

  render () {
    return (
      <div className="kitchen_sink">
        <ProgressBarMini progress={this.state.progress}/>
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
        <Input label="Input" changeHandler={(value) => this.setState({inputValue:value})} value={this.state.inputValue} validated/>
        <Button label="Button"/>
        <TextArea label="TextArea" changeHandler={(value) => this.setState({textAreaValue:value})} value={this.state.textAreaValue}/>
        <div className=""><NoDataPanel /></div>
        <ProgressBar progress={this.state.progress} message="Progress bar message"/>
      </div>
    )
  }
}
