```jsx noeditor
initialState={value:null};
<Datepicker 
    label="Pick date" 
    value={state.value}
    min={ new Date('December 17, 1995')}
    max={ new Date('December 17, 2020')} 
    onChange={(val,method) => setState({value:val})} />

```
```jsx static
import { Datepicker } from 'dcn-network-insights-ux';
constructor(props) {
    super(props);
    this.state = {
        value: null
    }
}
...
...
render() {
    return(
        /* The rest of your markup */
        <Datepicker label="Pick date" value={state.value} onChange={(val,method) => setState({value:val})} />
    )
}
```