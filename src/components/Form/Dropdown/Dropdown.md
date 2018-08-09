```jsx noeditor
initialState = {value:null};
<Dropdown 
	label="Select" 
    value={state.value}
	options={[
		{id:0,value:"Option 1"},
		{id:1,value:"Option 2", disabled: true},
		{id:2,value:"Option 3"},
		{id:3,value:"Option 4"}]}
    onChange={
        (val) => setState({value:val.value})
    }
	/>
```
```jsx static
import { Dropdown } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value:null,
        options: [
            {id:0,value:"Option 1"},
            {id:1,value:"Option 2", disabled: true},
            {id:2,value:"Option 3"},
            {id:3,value:"Option 4"}
        ]
    };
}

...
...

render() {
    return(
        /* The rest of your markup */
        <Dropdown 
            label="Select" 
            value={this.state.value}
            options={this.state.options}
            onChange={
                (val) => this.setState({value:val.value})
            }/>
    )
}

```