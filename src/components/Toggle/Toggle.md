```jsx
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
				changeHandler={() => setState({value1:!state.value1})} />

	</div>
	<div style={{
		display:'flex', 
		alignItems:'center'}}>

		GOOD:
		<Toggle value={state.value2} 
				label="Toggle" 
				changeHandler={() => setState({value2:!state.value2})} 
				mode="GOOD"/>

	</div>
	<div style={{
		display:'flex',
		alignItems:'center'}}>

		BAD:
		<Toggle value={state.value3} 
					label="Toggle" 
					changeHandler={() => setState({value3:!state.value3})} 
					mode="BAD"/>

	</div>

</div>
```