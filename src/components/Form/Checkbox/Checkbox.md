```jsx noeditor
initialState = {
    options: [
        {id:0,value:"Option 1"},
        {id:1,value:"Option 2", disabled: true},
        {id:2,value:"Option 3"},
        {id:3,value:"Option 4"}
      ],
    value: []
};

<Checkbox 
    label="Choose an option" 
    options={state.options} 
    value={state.value} 
    onChange={(val) => setState({value:val})}/>
```
```jsx static
import { Checkbox } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        options:[
            {id:0,value:"Option 1"},
            {id:1,value:"Option 2", disabled: true},
            {id:2,value:"Option 3"},
            {id:3,value:"Option 4"}
        ],
        value: []
    };
}

render() {
    return(
        <Checkbox 
            label="Choose an option" 
            options={this.state.options} 
            value={this.state.value} 
            onChange={(val) => this.setState({value:val})}/>
    );
}
```