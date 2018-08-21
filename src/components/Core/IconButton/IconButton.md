```jsx noeditor
<IconButton icon={require('../../../utilities/Icons/Icons').IconLib.settings} />
```
```jsx static
import { IconButton, IconLib } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <IconButton icon={IconLib.settings} onClick={this.clickHandler}/>
    )
}

```