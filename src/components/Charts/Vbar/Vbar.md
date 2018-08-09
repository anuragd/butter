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
    <Vbar options={{series:[{data:state.data}]}} />
</div>
```
```jsx static
import { Vbar } from 'dcn-network-insights-ux';
render() {
    return(
        <Vbar options={HighchartOptions} />
    );
}
```