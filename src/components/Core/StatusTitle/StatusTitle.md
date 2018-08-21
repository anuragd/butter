```jsx noeditor
<div style={{display:'flex', width: '100%', justifyContent:'space-between'}}>
	<StatusTitle isOk={true} label="App Name" />
	<StatusTitle isOk={false} label="App Name" />
</div>
```
```jsx static
import { StatusTitle } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <StatusTitle isOk={true} label="App Name" />
    )
}

```