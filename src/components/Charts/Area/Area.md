```jsx noeditor
initialState ={
    data: (() => {
        let result = []
        for(var i=0; i<8; i++) {
          result.push(Math.random() * 10)
        }
        return result
    })()
};
<div style={{width:'600px'}}>
    <Area options={{series:[{data:state.data}]}} />
</div>
```
```jsx static
import { Area } from 'dcn-network-insights-ux';
render() {
    return(
        <Area options={HighchartOptions} />
    );
}
```