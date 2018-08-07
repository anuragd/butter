```jsx
initialState = {value:70};

<Slider 
	label="Slider" 
	min={0}
	max={100}
	value={state.value} 
	changeHandler={ (newValue) => setState({value:newValue}) } 
/>
```