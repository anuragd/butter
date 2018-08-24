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
      pieData: {
        "chart": {
          "type": "pie",
          "polar": false
        },
        "title": {
          "text": "Pie Charts using React HighCharts"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": true
          }
        },
        "series": [
          {
            "name": "Switches",
            "colorByPoint": true,
            "data": [
              {
                "name": "ste-n9k-9",
                "y": 22.86,
                "drilldown": "ste-n9k-9"
              },
              {
                "name": "ste-n9k-10",
                "y": 17.01,
                "drilldown": "ste-n9k-10"
              },
              {
                "name": "ste-n9k-11",
                "y": 15.72,
                "drilldown": "ste-n9k-11"
              },
              {
                "name": "ste-n9k-bg1",
                "y": 6.64,
                "drilldown": "ste-n9k-bg1"
              }
            ]
          }
        ],
        "drilldown": {
          "series": [
            {
              "name": "ste-n9k-bg1",
              "id": "ste-n9k-bg1",
              "innerSize": '70%',
              "data": [
                [
                  "tahusd",
                  1.24
                ],
                [
                  "aaa",
                  1.14
                ],
                [
                  "stats_client",
                  0.71
                ],
                [
                  "ksmd",
                  0.57
                ],
                [
                  "ExceptionLog",
                  0
                ]
              ]
            },
            {
              "name": "ste-n9k-9",
              "id": "ste-n9k-9",
              "data": [
                [
                  "nsusd",
                  2.73
                ],
                [
                  "t2usd",
                  2.5
                ],
                [
                  "stats_client",
                  1.05
                ],
                [
                  "ksmd",
                  0.91
                ],
                [
                  "python",
                  0.23
                ]
              ]
            },
            {
              "name": "ste-n9k-11",
              "id": "ste-n9k-11",
              "data": [
                [
                  "t2usd",
                  2.64
                ],
                [
                  "nsusd",
                  2.14
                ],
                [
                  "stats_client",
                  2
                ],
                [
                  "ksmd",
                  1.32
                ],
                [
                  "python",
                  0.64
                ]
              ]
            },
            {
              "name": "ste-n9k-10",
              "id": "ste-n9k-10",
              "data": [
                [
                  "python",
                  2.55
                ],
                [
                  "bios_daemon",
                  1.05
                ],
                [
                  "confelem",
                  0.18
                ],
                [
                  "telemetry",
                  0.14
                ],
                [
                  "platform",
                  0.05
                ]
              ]
            }
          ]
        }
      },
      tableData: {
        keys: [
          {key:'switch',label:'Switch',type:'text',sortable:true},
          {key:'serial',label:'Serial No',type:'text',sortable:true},
          {key:'managed',label:'Managed',type:'text'},
          {key:'status',label:'Status',type:'status', sortable: true},
          {key:'date',label:'Date',type:'date', sortable: true}
        ],
        data: [
          {
            "id": "5b7df27125cb02c7a7258613",
            "switch": "esse",
            "serial": "e08ed955-33c3-4908-90f8-d210e47e169b",
            "managed": true,
            "status": true,
            "date": "Fri Jul 02 2004 08:55:32 GMT-0700 (PDT)",
            "children": [
              {
                "id": "5b7df27120b297898e7b5335",
                "switch": "ea",
                "serial": "2ebd7d0a-1656-42c3-b2b2-9a1a47e458e8",
                "managed": false,
                "status": true,
                "date": "Thu Jun 08 1978 08:43:05 GMT-0700 (PDT)"
              },
              {
                "id": "5b7df271bfde97859ca0960f",
                "switch": "esse",
                "serial": "01ed5b6a-0923-4065-982d-38d34cd8c02e",
                "managed": true,
                "status": true,
                "date": "Thu Apr 26 2001 08:02:33 GMT-0700 (PDT)"
              },
              {
                "id": "5b7df271c58085bc9057bcc6",
                "switch": "dolore",
                "serial": "019a729f-f653-4b67-9b1c-41c73dc11f77",
                "managed": true,
                "status": false,
                "date": "Wed Sep 18 2013 06:41:38 GMT-0700 (PDT)"
              }
            ]
          },
          {
            "id": "5b7df27158484d7b87440200",
            "switch": "voluptate",
            "serial": "2bc36ead-dad6-4c8c-9118-1f73031735ed",
            "managed": false,
            "status": false,
            "date": "Sun Jun 21 1987 09:31:47 GMT-0700 (PDT)",
            "children": [
              {
                "id": "5b7df271912b65dcd395a19d",
                "switch": "ipsum",
                "serial": "3ea79a07-4843-4c82-97c4-252379935569",
                "managed": false,
                "status": true,
                "date": "Mon Sep 10 1979 20:14:34 GMT-0700 (PDT)"
              }
            ]
          },
          {
            "id": "5b7df27117aacae4093df664",
            "switch": "eiusmod",
            "serial": "d6dd2c3e-053a-47f3-9f01-c83119298012",
            "managed": true,
            "status": false,
            "date": "Sun Dec 14 2008 13:07:16 GMT-0800 (PST)",
            "children": [
              {
                "id": "5b7df271dd040b7119aa7b89",
                "switch": "proident",
                "serial": "e2755089-1a77-4ae5-8c81-0f148012a963",
                "managed": false,
                "status": true,
                "date": "Sun Jan 12 2003 14:58:09 GMT-0800 (PST)"
              },
              {
                "id": "5b7df2716c26385c5083deb8",
                "switch": "qui",
                "serial": "12adfd78-9b8e-476b-9bfd-43272de5ea77",
                "managed": false,
                "status": false,
                "date": "Thu Jul 09 1992 01:37:02 GMT-0700 (PDT)"
              },
              {
                "id": "5b7df271e7b5b01c1cd2c483",
                "switch": "elit",
                "serial": "294fdc07-a9eb-41b7-8c1d-eae85e2ce20b",
                "managed": false,
                "status": false,
                "date": "Sun Dec 16 2012 05:34:46 GMT-0800 (PST)"
              },
              {
                "id": "5b7df271174b0de4dc8a8c85",
                "switch": "ut",
                "serial": "69f588ed-c3ff-4654-8dce-494931c67468",
                "managed": true,
                "status": false,
                "date": "Tue Jul 10 2018 20:36:25 GMT-0700 (PDT)"
              }
            ]
          },
          {
            "id": "5b7df27193bcd6a982ec91fa",
            "switch": "incididunt",
            "serial": "5a46ffa2-21fe-42b6-aa18-6418390534f1",
            "managed": false,
            "status": true,
            "date": "Wed Sep 09 2009 22:52:01 GMT-0700 (PDT)",
            "children": [
              {
                "id": "5b7df271dd29c2b5ebd8a560",
                "switch": "fugiat",
                "serial": "9c4a0b7d-9007-4a1f-a169-5b35dedab997",
                "managed": false,
                "status": false,
                "date": "Wed Jul 27 1983 06:35:01 GMT-0700 (PDT)"
              },
              {
                "id": "5b7df27168c4ac014c9f83ce",
                "switch": "minim",
                "serial": "7a3601a3-6136-4950-a89f-324d8e3b6214",
                "managed": false,
                "status": true,
                "date": "Tue Oct 08 1974 14:53:41 GMT-0700 (PDT)"
              },
              {
                "id": "5b7df2716f1b5b47cfcc564a",
                "switch": "anim",
                "serial": "5bc29a39-c171-4b1a-aa5b-1b367f5a885b",
                "managed": false,
                "status": true,
                "date": "Thu Mar 14 1996 17:13:59 GMT-0800 (PST)"
              },
              {
                "id": "5b7df271a66247c61c15e053",
                "switch": "est",
                "serial": "4dfab68d-f3c1-4b82-b846-5a52afefcce7",
                "managed": true,
                "status": true,
                "date": "Sat Jun 06 1992 17:42:46 GMT-0700 (PDT)"
              }
            ]
          },
          {
            "id": "5b7df27136ef2557edecc953",
            "switch": "dolor",
            "serial": "a7a26be8-baf9-4601-95df-d9255be33f75",
            "managed": true,
            "status": true,
            "date": "Tue Nov 19 2013 12:57:47 GMT-0800 (PST)",
            "children": [
              {
                "id": "5b7df2718e4e764ba30f746d",
                "switch": "sunt",
                "serial": "85d366fb-d908-480d-b853-6244f3beb2f4",
                "managed": true,
                "status": false,
                "date": "Tue Jul 06 1982 18:45:07 GMT-0700 (PDT)"
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
                <Panel  collapse={{top:true,left:true}} size="half" hasSurface><Charts.Pie options={this.state.pieData} icon={IconLib.cpu_black} label="CPU"/></Panel>
              </Panel>
              <Panel collapse={{top:true,left:true, bottom: true, left: true}} size="full" hasSurface>
                <Tabs options={['Tab1','Tab2','Tab3','Tab4']} activeTab={this.state.activeTab} onChange={(tab,key) => this.setState({activeTab:tab})}/>
              </Panel>
            </Panel>
            <Panel size="full" collapse={{right:true,left:true}} hasSurface>
              <div className="pie-display">
                <div className="pie"><Charts.Pie options={this.state.pieData} icon={IconLib.cpu_black} label="CPU"/></div>
                <div className="pie"><Charts.Pie options={this.state.pieData} icon={IconLib.power_black} label="Power"/></div>
                <div className="pie"><Charts.Pie options={this.state.pieData} icon={IconLib.temperature_black} label="Temp"/></div>
              </div>
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
