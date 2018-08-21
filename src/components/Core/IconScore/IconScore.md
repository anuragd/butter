```jsx noeditor
<IconScore icon={require('../../../utilities/Icons/Icons').IconLib.temperature} value={20}/>
```
```jsx static
import { IconScore, IconLib } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <IconScore icon={IconLib.temperature} onClick={this.clickHandler}/>
    )
}

```