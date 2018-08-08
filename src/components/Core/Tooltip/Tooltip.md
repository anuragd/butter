```js noeditor
<div style={{display:'flex', justifyContent:'space-between'}}>
    <Tooltip content="I'm a TOP_RIGHT positioned tooltip" mode="TOP_RIGHT">
        Tooltip-worthy-content
    </Tooltip>
    <Tooltip content="I'm a RIGHT_TOP positioned tooltip" mode="RIGHT_TOP">
        Tooltip-worthy-content
    </Tooltip>
    <Tooltip content="I'm a BOTTOM_LEFT positioned tooltip" mode="BOTTOM_LEFT">
        Tooltip-worthy-content
    </Tooltip>
</div>
```
```jsx static
import { Tooltip } from 'dcn-network-insights-ux';

...
...

render() {
    return(
        /* The rest of your markup */
        <Tooltip content="I'm a TOP_RIGHT positioned tooltip" mode="TOP_RIGHT">
            Tooltip-worthy-content
        </Tooltip>
    );
}