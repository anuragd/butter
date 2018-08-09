```jsx noeditor
initialState ={
    data: [ 20, 30, 40, 10]
};
<div style={{width:'600px'}}>
    <Hbar options={{series:[{data:state.data}]}} />
</div>
```
```jsx static
import { Hbar } from 'dcn-network-insights-ux';
render() {
    return(
        <Hbar options={HighchartOptions} />
    );
}
```