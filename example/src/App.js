import React, { Component } from 'react'

import { Radio, Dropdown, Input, Button, TextArea, NoDataPanel, ProgressBar, ProgressBarMini, Toggle, Slider, Checkbox, DatePicker, Tooltip } from 'dcn-ux-resources'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Test',
      textAreaValue:'',
      progress: 50,
      toggleState: true,
      sliderValue:26,
      checkboxOptions: [
        {id:0,value:"Option 1"},
        {id:1,value:"Option 2", disabled: true},
        {id:2,value:"Option 3"},
        {id:3,value:"Option 4"},
        {id:4,value:"Option 5"},
        {id:5,value:"Option 6"},
        {id:6,value:"Option 7"},
      ],
      checkboxValue:{id:4,value:"Option 5"},
      datepickerValue: new Date(),
      minDate: new Date(2017,6,1),
      maxDate: new Date(2020,6,1)
    }
  }

  render () {
    return (
      <div className="kitchen_sink">
        <Slider label="Slider" min={0} max={100} value={this.state.sliderValue} changeHandler={(value) => this.setState({sliderValue:value})}/>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="LEFT_TOP">
          <DatePicker 
            label="Choose date" 
            value={this.state.datepickerValue} 
            changeHandler={(val) => this.setState({datepickerValue:val})}
            min={this.state.minDate}
            max={this.state.maxDate}/>
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="LEFT_TOP">
          <Toggle value={this.state.toggleState} changeHandler={() => this.setState({toggleState: !this.state.toggleState})} label="Toggle" valueLabels={{on:"yes",off:"no"}}/>
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="BOTTOM_LEFT">
          <Radio 
            label="Select an option"
            options={[
              {id:0,value:"Option 1"},
              {id:1,value:"Option 2", disabled: true},
              {id:2,value:"Option 3"},
              {id:3,value:"Option 4"}]}
            />
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="BOTTOM_RIGHT">
          <Checkbox label="Choose an option" options={this.state.checkboxOptions} value={this.state.checkboxValue} changeHandler={(val) => this.setState({checkboxValue:val})}/>
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="RIGHT_BOTTOM">
          <Dropdown 
            label="Select" 
            options={[
              {id:0,value:"Option 1"},
              {id:1,value:"Option 2", disabled: true},
              {id:2,value:"Option 3"},
              {id:3,value:"Option 4"}]}
            />
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="RIGHT_TOP">
          <Input label="Input" changeHandler={(value) => this.setState({inputValue:value})} value={this.state.inputValue}/>
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="TOP_RIGHT">
          <Button label="Button"/>
        </Tooltip>
        <Tooltip content="<p>Tousled keffiyeh marfa, celiac duis snackwave distillery.</p>" mode="TOP_LEFT">
          <TextArea label="TextArea" changeHandler={(value) => this.setState({textAreaValue:value})} value={this.state.textAreaValue}/>
        </Tooltip>
        
        
        
        
        
        
        <div className=""><NoDataPanel /></div>
        <ProgressBar progress={this.state.progress} message="Progress bar message"/>
      </div>
    )
  }
}
