Checkbox example:

```js
initialState={selected:{id:null,value:null}};

<Checkbox 
	label="Select an option"
	value={state.selected}
	changeHandler={(val) => setState({selected:val})}
	options={[
		{id:0,value:"Option 1"},
		{id:1,value:"Option 2", disabled: true},
		{id:2,value:"Option 3"},
		{id:3,value:"Option 4"},
		{id:4,value:"Option 5"},
		{id:5,value:"Option 6"},
		{id:6,value:"Option 7"}]} 
/>
```