```jsx noeditor
initialState = {value1:false, value2:false, value3:false};

<div style={{
	display:'flex', 
	alignItems:'center', 
	justifyContent:'space-between', 
	fontFamily:'sans-serif'}}>
	
	<div style={{
		display:'flex', 
		alignItems:'center'}}>
		
		NORMAL:
		<Toggle value={state.value1} 
				label="Toggle" 
				onChange={(val) => setState({value1:val})} />

	</div>
	<div style={{
		display:'flex', 
		alignItems:'center'}}>

		GOOD:
		<Toggle value={state.value2} 
				label="Toggle" 
				onChange={(val) => setState({value2:val})} 
				mode="GOOD"/>

	</div>
	<div style={{
		display:'flex',
		alignItems:'center'}}>

		BAD:
		<Toggle value={state.value3} 
					label="Toggle" 
					onChange={(val) => setState({value3:val})} 
					mode="BAD"/>

	</div>

</div>
```
```jsx static
import { Toggle } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value: false
    }
}
render() {
    return(
        <Toggle 
        	value={state.value} 
			label="Toggle" 
			onChange={() => setState({value:!state.value})} 
			mode="GOOD"/>
    )
}
```