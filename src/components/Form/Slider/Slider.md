```jsx noeditor
initialState = {value:70};

<Slider 
	label="Slider" 
	min={0}
	max={100}
	value={state.value} 
	onChange={ (newValue) => setState({value:newValue}) } 
/>
```
```jsx static
import { Slider } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value: 0
    };
}

render() {
    return(
        <Slider 
            label="Slider" 
            min={0}
            max={100}
            value={state.value} 
            onChange={ (newValue) => setState({value:newValue}) } 
        />
    );
}
```