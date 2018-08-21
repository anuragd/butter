```jsx noeditor
    <div style={{display:'flex', width: '100%', justifyContent:'space-between'}}>
    	<AlertScore
    		type="critical"
    		score={12}
    		/>
        <AlertScore
            type="major"
            score={8}
            />
        <AlertScore
            type="minor"
            score={1}
            />
        <AlertScore
            type="other"
            score={90}
            />
    </div>
```
```jsx static
import { AlertScore } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <Alertscore 
            type="critical"
            score={12}/>
    )
}

```