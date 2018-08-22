import React, { Component } from 'react'

import { 
  Radio, 
  Dropdown, 
  Input, 
  Button, 
  Textarea, 
  NoDataPanel, 
  ProgressBar, 
  ProgressBarMini, 
  Toggle, 
  Slider, 
  Checkbox, 
  Datepicker, 
  Tooltip, 
  Table, 
  Tabs,
  Scoreboard, 
  StatusTitle,
  SplitScoreboard,
  TogglePanel,
  IconButton,
  IconScore,
  IconLib,
  AlertScore,
  FillMeter,
  Charts, 
  Container, 
  Header, 
  Content, 
  Panel } from 'dcn-network-insights-ux'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Test',
      errorString: '',
      textAreaValue:'',
      progress: 50,
      toggleState: true,
      sliderValue:26,
      dropdownValue: null,
      radioValue: null,
      checkboxOptions: [
        {id:0,value:"Option 1"},
        {id:1,value:"Option 2", disabled: true},
        {id:2,value:"Option 3"},
        {id:3,value:"Option 4"}
      ],
      tableData: {
        keys: [
          {key:'switch',label:'Switch',type:'text',sortable:true},
          {key:'serial',label:'Serial No',type:'text',sortable:true},
          {key:'managed',label:'Managed',type:'text'},
          {key:'status',label:'Status',type:'text'}
        ],
        data: [
          {
            "id": "5b7dc6b22d275c7661a39e02",
            "switch": "dolore",
            "serial": "64155644-2616-429e-b591-5ee11029ca7d",
            "managed": false,
            "status": false,
            "children": [
              {
                "id": "5b7dc6b2f9650b67c523fc70",
                "switch": "elit",
                "serial": "ee7722ba-28f6-4045-98f9-c4fd0aa6d92c",
                "managed": true,
                "status": true
              },
              {
                "id": "5b7dc6b24c3d16b03edca132",
                "switch": "aliquip",
                "serial": "a9d5b110-461b-40aa-b49f-0740a1e50858",
                "managed": true,
                "status": false
              }
            ]
          },
          {
            "id": "5b7dc6b2a94cef64887e2bdc",
            "switch": "eiusmod",
            "serial": "ed09f04f-cba0-4b31-8638-7da65f43302a",
            "managed": true,
            "status": true,
            "children": [
              {
                "id": "5b7dc6b2d0c672ca41b4f16b",
                "switch": "sit",
                "serial": "004e7266-7f10-4dfe-b307-d670478c8361",
                "managed": false,
                "status": false
              },
              {
                "id": "5b7dc6b2b2ac738a6d303860",
                "switch": "cupidatat",
                "serial": "94f490fe-3f27-4ee9-bdb8-6e3be8d463ce",
                "managed": false,
                "status": false
              },
              {
                "id": "5b7dc6b2ff1e771007e46464",
                "switch": "officia",
                "serial": "9109bb6e-f2b6-46c8-b1a2-98239f8bd0f4",
                "managed": true,
                "status": false
              }
            ]
          },
          {
            "id": "5b7dc6b2adef891e05ceaace",
            "switch": "ipsum",
            "serial": "c348c8f2-d889-4688-a704-080bac2056ee",
            "managed": false,
            "status": false,
            "children": [
              {
                "id": "5b7dc6b2242a644cd4e32443",
                "switch": "sit",
                "serial": "50896e89-087d-4558-a02a-63b670dfcf66",
                "managed": true,
                "status": true
              },
              {
                "id": "5b7dc6b2c886797320961878",
                "switch": "reprehenderit",
                "serial": "912df043-5517-47da-b4c1-c6253ec80570",
                "managed": true,
                "status": true
              },
              {
                "id": "5b7dc6b2d1fa3a01489fefbd",
                "switch": "dolore",
                "serial": "112303a6-e340-43ca-b27b-0e8704b352f1",
                "managed": false,
                "status": false
              }
            ]
          },
          {
            "id": "5b7dc6b2bb52ebfd6129d889",
            "switch": "laborum",
            "serial": "f4dc5d97-285e-40be-a0b1-1d501bdd3d10",
            "managed": false,
            "status": false,
            "children": [
              {
                "id": "5b7dc6b24bd8f78bfad63d3f",
                "switch": "laborum",
                "serial": "5af035df-f019-4b39-a636-ac222b4c7cd2",
                "managed": true,
                "status": false
              },
              {
                "id": "5b7dc6b25504f3eb2cbfa661",
                "switch": "sit",
                "serial": "6410e556-4e3a-4f0e-ba82-ee23a692de20",
                "managed": false,
                "status": true
              }
            ]
          },
          {
            "id": "5b7dc6b29b41528ddbc05235",
            "switch": "aute",
            "serial": "dd6fad0b-2101-4ee6-ba2b-792c9b19c7d6",
            "managed": true,
            "status": true,
            "children": [
              {
                "id": "5b7dc6b252d410848899c32f",
                "switch": "labore",
                "serial": "5a7df7cd-5c7d-4d16-96e3-35343f1d86e7",
                "managed": true,
                "status": true
              },
              {
                "id": "5b7dc6b243b3ca2d12fca86a",
                "switch": "aliqua",
                "serial": "39614539-1c42-4615-b5bb-48377870d1df",
                "managed": true,
                "status": false
              },
              {
                "id": "5b7dc6b2137c8922c8b90544",
                "switch": "culpa",
                "serial": "cce07d7e-38f0-4bfa-82d2-225964ce3b96",
                "managed": true,
                "status": false
              },
              {
                "id": "5b7dc6b2a43bb49dccdce030",
                "switch": "fugiat",
                "serial": "9358ca64-12c2-44c8-bde6-d2e7a97c4520",
                "managed": true,
                "status": true
              }
            ]
          },
          {
            "id": "5b7dc6b21e020f77d76f27c1",
            "switch": "excepteur",
            "serial": "2fc87124-62ec-476d-89ec-f897560412fc",
            "managed": true,
            "status": false,
            "children": [
              {
                "id": "5b7dc6b227d251d80efefd0f",
                "switch": "nostrud",
                "serial": "eb84668a-9cc2-47df-9771-80e8b19c28f6",
                "managed": false,
                "status": true
              },
              {
                "id": "5b7dc6b2933ab5f28ae6da58",
                "switch": "ut",
                "serial": "f72a57d9-e42d-4b74-9e5d-c6726ba75e7d",
                "managed": true,
                "status": true
              }
            ]
          },
          {
            "id": "5b7dc6b2636088203c9c5d34",
            "switch": "aliqua",
            "serial": "1b53cefd-c270-4077-a712-84e50cee8101",
            "managed": false,
            "status": true,
            "children": [
              {
                "id": "5b7dc6b2205bea8a127e5dd8",
                "switch": "velit",
                "serial": "97b89d7b-b2d4-42ad-b2fe-2a8795d57bec",
                "managed": false,
                "status": true
              },
              {
                "id": "5b7dc6b27b8b4cf35fc501b5",
                "switch": "deserunt",
                "serial": "208b0a5e-1bc2-4249-9091-7a16753853b9",
                "managed": true,
                "status": false
              },
              {
                "id": "5b7dc6b2e0f6708042827356",
                "switch": "minim",
                "serial": "657fc3ad-840a-447d-a5a3-0896403826cb",
                "managed": true,
                "status": true
              }
            ]
          }
        ]
      },
      checkboxValue:[],
      datepickerValue: null,
      minDate: new Date(2017,6,1),
      maxDate: new Date(2020,6,1),
      activeTab: 'Tab2',
      histoData: (() => {
        let result = []
        for(var i=0; i<3; i++) {
          result.push(parseInt(Math.random() * 10))
        }
        return result
      })(),
      chartData: [ 20, 30, 40, 10],
      togglePanel: false
    }
  }

  render () {
    return (
      <Container>
        <Header>
          <Panel size="threequarter" collapse={{top:true,right:true,bottom:true}}>
            <StatusTitle label="Summary" isOk={true} />
          </Panel>
          <Panel size="quarter" collapse={{top:true,right:true,bottom:true,left:true}}>
            <Panel size="quarter" collapse={{top:true,right:true,bottom:true,left:true}}>
              <IconButton icon={IconLib.settings} onClick={() => console.log("settings")}/>
            </Panel>
            <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
              <IconButton icon={IconLib.help} onClick={() => console.log("help")}/>
            </Panel>
          </Panel>
        </Header>
        <Content>
          <Panel size="full">
            <Panel size="full"  collapse={{top:true,right:true,left:true}}>
              <TogglePanel title="Environment" value={this.state.togglePanel} onChange={(val) => this.setState({togglePanel:val}) }>
                <ul className="environment_panel">
                  <li>
                    <img src={IconLib.cpu_black} /> CPU
                  </li>
                  <li>
                    <img src={IconLib.memory_black} /> Memory
                  </li>
                  <li>
                    <img src={IconLib.temperature_black} /> Temperature
                  </li>
                  <li>
                    <img src={IconLib.fan_black} /> Fan
                  </li>
                  <li>
                    <img src={IconLib.power_black} /> Power
                  </li>
                </ul>
              </TogglePanel>
            </Panel>
            <Panel size="full"  collapse={{top:true,right:true,left:true}} hasSurface label="Overview">
              <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}>
                <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
                  <Scoreboard label="Switches" value={334} />
                </Panel>
                <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
                  <IconScore icon={IconLib.temperature} value={7}/>
                </Panel>
              </Panel>
              <Panel size="half" collapse={{top:true, left:true, bottom:true}}>
                <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}><AlertScore type="critical"/></Panel>
                <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}><AlertScore type="major"/></Panel>
                <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}><AlertScore type="minor"/></Panel>
                <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}><AlertScore type="other"/></Panel>
              </Panel>
              <Panel size="quarter" collapse={{top:true, left:true, bottom:true}}>
                <Panel size="full"><FillMeter label="Transceiver Alarm" value={4} max={100}/></Panel>
                <Panel size="full"><SplitScoreboard label="Total" good={10} bad={20}/></Panel>
              </Panel>
            </Panel>
            <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
              <Panel size="full" collapse={{top:true,right:true,bottom:true,left:true}}>
                <Panel  collapse={{top:true,left:true}} size="half" hasSurface><Charts.Hbar options={{series:[{data:this.state.chartData}]}} /></Panel>
                <Panel  collapse={{top:true,left:true}} size="half" hasSurface><Charts.Pie options={{series:[{data:this.state.chartData}]}} icon={IconLib.cpu_black} label="CPU"/></Panel>
              </Panel>
              <Panel collapse={{top:true,left:true, bottom: true, left: true}} size="full" hasSurface>
                <Tabs options={['Tab1','Tab2','Tab3','Tab4']} activeTab={this.state.activeTab} onChange={(tab,key) => this.setState({activeTab:tab})}/>
              </Panel>
            </Panel>
            <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}}>
              <Panel size="half" collapse={{left:true,bottom:true,top:true}}>
                <Panel size="full" collapse={{left:true,right:true,bottom:true,top:true}} hasSurface>
                  <Tooltip content="<p>I'm a LEFT_TOP tooltip</p>" mode="LEFT_TOP">
                    <Datepicker 
                      label="Choose date" 
                      value={this.state.datepickerValue} 
                      onChange={(val) => this.setState({datepickerValue:val})}
                      min={this.state.minDate}
                      max={this.state.maxDate}/>
                  </Tooltip>
                </Panel>
                <Panel  size="full" collapse={{left:true,right:true,bottom:true,top:true}} hasSurface>
                  <Tooltip content="<p>I'm a TOP_RIGHT tooltip</p>" mode="TOP_RIGHT">
                    <Button label="Button" onClick={() => alert('hi')}/>
                  </Tooltip>
                </Panel>
              </Panel>
              <Panel  size="half" collapse={{right:true,left: true,bottom:true,top:true}} hasSurface>
                <Tooltip content="<p>I'm a TOP_LEFT tooltip</p>" mode="TOP_LEFT">
                    <Textarea label="TextArea" onChange={(value) => this.setState({textAreaValue:value})} value={this.state.textAreaValue}/>
                  </Tooltip>
              </Panel>
            </Panel>
          </Panel>
          <Panel  size="full" collapse={{top:true, bottom:true}}>
            <Panel  size="quarter" collapse={{left:true, top:true}} hasSurface>
              <Slider label="Slider" min={20} max={80} value={this.state.sliderValue} onChange={(value) => this.setState({sliderValue:value})}/>
            </Panel>
            <Panel  size="quarter" collapse={{left:true, top:true}}>
              <Panel size="full" collapse={{left:true,top:true,right:true,bottom:true}} hasSurface>
                <Tooltip content="<p>I'm a LEFT_BOTTOM tooltip</p>" mode="LEFT_BOTTOM">
                  <Toggle value={this.state.toggleState} onChange={(val) => this.setState({toggleState: val})} label="Toggle" valueLabels={{on:"yes",off:"no"}}/>
                </Tooltip>
              </Panel>
              <Panel size="full" collapse={{left:true,top:true,right:true,bottom:true}} hasSurface>
                <Tooltip content="<p>I'm a RIGHT_TOP tooltip</p>" mode="RIGHT_TOP">
                  <Input label="Input" onChange={(value) => this.setState({inputValue:value})} value={this.state.inputValue} validated disabled/>
                </Tooltip>
              </Panel>
            </Panel>
            <Panel  size="quarter" collapse={{left:true, top:true}} hasSurface>
              <Tooltip content="<p>I'm a BOTTOM_LEFT tooltip</p>" mode="BOTTOM_LEFT">
                <Radio 
                  label="Select an option"
                  value={this.state.radioValue}
                  onChange={(val) => this.setState({radioValue:val})}
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
                <Checkbox label="Choose an option" options={this.state.checkboxOptions} value={this.state.checkboxValue} onChange={(val) => this.setState({checkboxValue:val})}/>
              </Tooltip>
            </Panel>
          </Panel>
          <Panel size="full" collapse={{top:true}}>
            <Panel  size="quarter" collapse={{top:true, left:true, bottom:true}}>
              <Panel  size="full" collapse={{top:true, left:true, bottom:true, right:true}} hasSurface>
                <Tooltip content="<p>I'm a RIGHT_BOTTOM tooltip</p>" mode="RIGHT_BOTTOM">
                  <Dropdown 
                    label="Select"
                    value={this.state.dropdownValue}
                    onChange={(val) => this.setState({dropdownValue:val})} 
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
