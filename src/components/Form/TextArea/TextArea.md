TextArea example:

```js
initialState = {value:''};
<TextArea 
	label="Text Area Label"
    value={state.value}
    changeHandler={(val) => setState({value:val})} 
/>
```