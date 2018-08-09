```jsx noeditor
initialState = {value:''};
<Textarea 
	label="Text Area Label"
    value={state.value}
    onChange={(val) => setState({value:val})} 
/>
```
```jsx static
import { Textarea } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value: ""
    }
}
render() {
    return(
        <Textarea 
            label="Text Area Label"
            value={state.value}
            onChange={(val) => setState({value:val})} 
        />
    )
}
```