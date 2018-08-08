Normal button
```jsx noeditor
<Button label="Button" />
```
```jsx static
import { Button } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <Button 
            label="Button"
            onClick = {this.onClickHandler}
            onMouseEnter = {this.onMouseEnter}
            onMouseLeave = {this.onMouseLeave} />
    )
}

```

Disabled button
```jsx noeditor
<Button label="Button" disabled/>
```
```jsx static
import { Button } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <Button 
            label="Button"
            disabled/>
    )
}

```