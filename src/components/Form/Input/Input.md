```js noeditor
initialState={value:""};
<Input 
	label="Input Label"
    value={state.value}
    onChange={ (val) => setState({value:val}) } 
/>
```
```jsx static
import { Input } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value: ""
    }
}
render() {
    return(
        <Input 
            label="Input Label"
            value={state.value}
            onChange={ (val) => setState({value:val}) } 
        />
    )
}
```