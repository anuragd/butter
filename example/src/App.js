import React, { Component } from 'react'

import { Radio, Dropdown, Input, Button, TextArea, NoDataPanel, ProgressBar, ProgressBarMini, Toggle, Slider, Checkbox, DatePicker, Tooltip, Table, Tabs, DCNCharts, Container, Header, Content, Panel, Surface } from 'dcn-ux-resources'

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
        {id:3,value:"Option 4"}
      ],
      tableData: {
        keys: [
          {key:'switch',label:'Switch',type:'text',sortable:true},
          {key:'ipAddress',label:'IP Address',type:'text',sortable:true},
          {key:'serial',label:'Serial No',type:'text',sortable:true},
          {key:'managed',label:'Managed',type:'text'},
          {key:'snmp',label:'SNMP Status',type:'text',sortable:true},
          {key:'lastUpdated',label:'Last updated at',type:'date',sortable:true}
        ],
        data: [
          {id:0,switch:'leaf1',ipAddress:'24.0.80.200',serial:'SAL18432P5Q ',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00',attention:true},
          {id:1,switch:'leaf1',ipAddress:'24.0.80.202',serial:'SAL18432P4S',managed:'true',snmp:'ok',lastUpdated:'2018-07-30 17:11:00'},
          {id:2,switch:'leaf2',ipAddress:'24.0.80.201',serial:'SAL18432P4X',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00'},
          {id:3,switch:'leaf3',ipAddress:'24.0.80.208',serial:'FDO210721L3',managed:'true',snmp:'ok',lastUpdated:'2018-07-30 17:11:00'},
          {id:4,switch:'n9k-bg1',ipAddress:'24.0.80.212',serial:'FDO210705NY',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00'},
          {id:5,switch:'n9k-bg2',ipAddress:'24.0.80.209',serial:'SAL1833YM11',managed:'true',snmp:'ok',lastUpdated:'2018-07-30 17:11:00'},
          {id:6,switch:'spine1',ipAddress:'24.0.80.217',serial:'SAL18422FUR',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00'},
          {id:7,switch:'spine2',ipAddress:'24.0.80.209',serial:'SAL18422FXL',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00'},
          {id:8,switch:'ste-n9k-18-deep',ipAddress:'24.0.80.311',serial:'SAL18432P11',managed:'true',snmp:'ok',lastUpdated:'2018-07-30 17:11:00'},
          {id:9,switch:'ste-n9k-bg1',ipAddress:'24.0.80.303',serial:'FDO21061Q4W',managed:'true',snmp:'Unreachable',lastUpdated:'2018-07-30 17:11:00'}
        ],
      },
      checkboxValue:{id:4,value:"Option 5"},
      datepickerValue: new Date(),
      minDate: new Date(2017,6,1),
      maxDate: new Date(2020,6,1),
      activeTab: 'Tab2',
      histoData: (() => {
        let result = []
        for(var i=0; i<8; i++) {
          result.push(Math.random() * 10)
        }
        return result
      })(),
      chartData: [ 20, 30, 40, 10]
    }
  }

  render () {
    return (
      <Container>
        <Header>
          <Panel size="threequarter" collapse={{top:true,right:true,bottom:true}}>
            CISCO Network Insights
          </Panel>
          <Panel size="quarter" collapse={{top:true,right:true,bottom:true,left:true}}>
            <Panel size="quarter" collapse={{top:true,right:true,bottom:true,left:true}}>
              <p style={{display:'flex',alignItems:'center'}}>Gear</p>
            </Panel>
            <Panel size="threequarter" collapse={{top:true,right:true,bottom:true,left:true}}>
              <Dropdown 
                label="Select" 
                options={[
                  {id:0,value:"Option 1"},
                  {id:1,value:"Option 2", disabled: true},
                  {id:2,value:"Option 3"},
                  {id:3,value:"Option 4"}]}
                />
            </Panel>
          </Panel>
        </Header>
        <Content>
          <Panel size="full">
            <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
              <Panel size="full" collapse={{top:true,right:true,bottom:true,left:true}}>
                <Panel size="quarter" collapse={{top:true,left:true}} hasSurface><DCNCharts.pie options={{series:[{data:this.state.chartData}]}} /></Panel>
                <Panel  collapse={{top:true,left:true}} size="quarter" hasSurface><DCNCharts.hbar options={{series:[{data:this.state.chartData}]}} /></Panel>
                <Panel  collapse={{top:true,left:true}} size="quarter" hasSurface><DCNCharts.vbar options={{series:[{data:this.state.histoData}]}} /></Panel>
                <Panel  collapse={{top:true,left:true}}size="quarter" hasSurface><DCNCharts.area options={{series:[{data:this.state.histoData}]}} /></Panel>
              </Panel>
              <Panel collapse={{top:true,left:true, bottom: true, left: true}} size="full" hasSurface>
                <Tabs options={['Tab1','Tab2','Tab3','Tab4']} activeTab={this.state.activeTab} changeHandler={(tab) => this.setState({activeTab:tab})}/>
              </Panel>
            </Panel>
            <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
              <Panel size="half" collapse={{left:true,right:true,bottom:true,top:true}}>
                <Panel size="full" collapse={{left:true,right:true,bottom:true,top:true}} hasSurface>
                  <Tooltip content="<p>I'm a LEFT_TOP tooltip</p>" mode="LEFT_TOP">
                    <DatePicker 
                      label="Choose date" 
                      value={this.state.datepickerValue} 
                      changeHandler={(val) => this.setState({datepickerValue:val})}
                      min={this.state.minDate}
                      max={this.state.maxDate}/>
                  </Tooltip>
                </Panel>
                <Panel  size="full" collapse={{left:true,right:true,bottom:true,top:true}} hasSurface>
                  <Tooltip content="<p>I'm a TOP_RIGHT tooltip</p>" mode="TOP_RIGHT">
                    <Button label="Button"/>
                  </Tooltip>
                </Panel>
              </Panel>
              <Panel  size="half" collapse={{left:true,right:true,bottom:true,top:true}} hasSurface>
                <Tooltip content="<p>I'm a TOP_LEFT tooltip</p>" mode="TOP_LEFT">
                    <TextArea label="TextArea" changeHandler={(value) => this.setState({textAreaValue:value})} value={this.state.textAreaValue}/>
                  </Tooltip>
              </Panel>
            </Panel>
          </Panel>
          <Panel  size="full" collapse={{top:true, bottom:true}}>
            <Panel  size="quarter" collapse={{left:true, top:true}} hasSurface>
              <Slider label="Slider" min={0} max={100} value={this.state.sliderValue} changeHandler={(value) => this.setState({sliderValue:value})}/>
            </Panel>
            <Panel  size="quarter" collapse={{left:true, top:true}}>
              <Panel size="full" collapse={{left:true,top:true,right:true,bottom:true}} hasSurface>
                <Tooltip content="<p>I'm a LEFT_BOTTOM tooltip</p>" mode="LEFT_BOTTOM">
                  <Toggle value={this.state.toggleState} changeHandler={() => this.setState({toggleState: !this.state.toggleState})} label="Toggle" valueLabels={{on:"yes",off:"no"}}/>
                </Tooltip>
              </Panel>
              <Panel size="full" collapse={{left:true,top:true,right:true,bottom:true}} hasSurface>
                <Tooltip content="<p>I'm a RIGHT_TOP tooltip</p>" mode="RIGHT_TOP">
                  <Input label="Input" changeHandler={(value) => this.setState({inputValue:value})} value={this.state.inputValue}/>
                </Tooltip>
              </Panel>
            </Panel>
            <Panel  size="quarter" collapse={{left:true, top:true}} hasSurface>
              <Tooltip content="<p>I'm a BOTTOM_LEFT tooltip</p>" mode="BOTTOM_LEFT">
                <Radio 
                  label="Select an option"
                  options={[
                    {id:0,value:"Option 1"},
                    {id:1,value:"Option 2", disabled: true},
                    {id:2,value:"Option 3"},
                    {id:3,value:"Option 4"}]}
                  />
              </Tooltip>
            </Panel>
            <Panel size="quarter" collapse={{left:true, top:true, right:true}} hasSurface>
              <Tooltip content="<p>I'm a BOTTOM_RIGHT tooltip</p>" mode="BOTTOM_RIGHT">
                <Checkbox label="Choose an option" options={this.state.checkboxOptions} value={this.state.checkboxValue} changeHandler={(val) => this.setState({checkboxValue:val})}/>
              </Tooltip>
            </Panel>
          </Panel>
          <Panel size="full" collapse={{top:true}}>
            <Panel  size="quarter" collapse={{top:true, left:true, bottom:true}}>
              <Panel  size="full" collapse={{top:true, left:true, bottom:true, right:true}} hasSurface>
                <Tooltip content="<p>I'm a RIGHT_BOTTOM tooltip</p>" mode="RIGHT_BOTTOM">
                  <Dropdown 
                    label="Select" 
                    options={[
                      {id:0,value:"Option 1"},
                      {id:1,value:"Option 2", disabled: true},
                      {id:2,value:"Option 3"},
                      {id:3,value:"Option 4"}]}
                    />
                </Tooltip>
              </Panel> 
              <Panel  size="full" collapse={{top:true, left:true, bottom:true, right: true}} hasSurface>
                <div className=""><NoDataPanel /></div>
              </Panel>        
            </Panel>
            <Panel  size="threequarter" collapse={{top:true, left:true, bottom: true, right: true}} hasSurface>
              <Table data={this.state.tableData}/>
            </Panel>
          </Panel>
          <Panel  size="full" collapse={{top:true}}>
            <Panel  size="quarter" collapse={{top:true, left:true, bottom:true}} hasSurface>
              <ProgressBarMini progress={this.state.progress} message="Progress bar message"/>
            </Panel>
            <Panel  size="threequarter" collapse={{top:true, right:true, bottom:true, left:true}} hasSurface>
              <ProgressBar progress={this.state.progress} message="Progress bar message"/>
            </Panel>
          </Panel>
        </Content>
      </Container>
    )
  }
}
