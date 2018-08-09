```jsx noeditor
initialState ={
    data: [ 20, 30, 40, 10]
};
<div style={{width:'600px'}}>
    <Pie options={{series:[{data:state.data}]}} />
</div>
```
```jsx static
import { Pie } from 'dcn-network-insights-ux';
render() {
    return(
        <Pie options={HighchartOptions} />
    );
}
```