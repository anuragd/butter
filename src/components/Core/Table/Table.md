Table example:
```jsx noeditor
initialState = {
    tableData: {
        keys: [
          {key:'switch',label:'Switch',type:'text',sortable:true},
          {key:'ipAddress',label:'IP Address',type:'text',sortable:true},
          {key:'serial',label:'Serial No',type:'text',sortable:true},
          {key:'managed',label:'Managed',type:'text'},
        ],
        data: [
          {id:0,switch:'leaf1',ipAddress:'24.0.80.200',serial:'SAL18432P5Q ',managed:'true', attention: true},
          {id:1,switch:'leaf1',ipAddress:'24.0.80.202',serial:'SAL18432P4S',managed:'true'},
          {id:2,switch:'leaf2',ipAddress:'24.0.80.201',serial:'SAL18432P4X',managed:'true'},
          {id:3,switch:'leaf3',ipAddress:'24.0.80.208',serial:'FDO210721L3',managed:'true'},
          {id:4,switch:'n9k-bg1',ipAddress:'24.0.80.212',serial:'FDO210705NY',managed:'true'},
          {id:5,switch:'n9k-bg2',ipAddress:'24.0.80.209',serial:'SAL1833YM11',managed:'true'},
          {id:6,switch:'spine1',ipAddress:'24.0.80.217',serial:'SAL18422FUR',managed:'true'},
          {id:7,switch:'spine2',ipAddress:'24.0.80.209',serial:'SAL18422FXL',managed:'true'},
          {id:8,switch:'ste-n9k-18-deep',ipAddress:'24.0.80.311',serial:'SAL18432P11',managed:'true'},
          {id:9,switch:'ste-n9k-bg1',ipAddress:'24.0.80.303',serial:'FDO21061Q4W',managed:'true'}
        ]
    }
};
<Table data={state.tableData} />
```
```jsx static

import { Table } from 'dcn-network-insights-ux';

constructor(props) {
    super(props);
    ...
    ...
    this.state = {
        tableData: {
            keys: [
              {key:'switch',label:'Switch',type:'text',sortable:true},
              {key:'ipAddress',label:'IP Address',type:'text',sortable:true},
              {key:'serial',label:'Serial No',type:'text',sortable:true},
              {key:'managed',label:'Managed',type:'text'},
            ],
            data: [
              {id:0,switch:'leaf1',ipAddress:'24.0.80.200',serial:'SAL18432P5Q ',managed:'true', attention: true},
              {id:1,switch:'leaf1',ipAddress:'24.0.80.202',serial:'SAL18432P4S',managed:'true'},
              {id:2,switch:'leaf2',ipAddress:'24.0.80.201',serial:'SAL18432P4X',managed:'true'},
              {id:3,switch:'leaf3',ipAddress:'24.0.80.208',serial:'FDO210721L3',managed:'true'},
              {id:4,switch:'n9k-bg1',ipAddress:'24.0.80.212',serial:'FDO210705NY',managed:'true'},
              {id:5,switch:'n9k-bg2',ipAddress:'24.0.80.209',serial:'SAL1833YM11',managed:'true'},
              {id:6,switch:'spine1',ipAddress:'24.0.80.217',serial:'SAL18422FUR',managed:'true'},
              {id:7,switch:'spine2',ipAddress:'24.0.80.209',serial:'SAL18422FXL',managed:'true'},
              {id:8,switch:'ste-n9k-18-deep',ipAddress:'24.0.80.311',serial:'SAL18432P11',managed:'true'},
              {id:9,switch:'ste-n9k-bg1',ipAddress:'24.0.80.303',serial:'FDO21061Q4W',managed:'true'}
            ]
        }
    }
}

render() {
    return (
      ... /* The rest of your markup */
      <Table data={this.state.tableData} />
    );
}

```