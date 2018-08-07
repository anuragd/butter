Input example:

```js
initialState={value:''};
<Input 
	label="Input Label"
    value={state.value}
    changeHandler={ (val) => setState({value:val}) } 
/>
```