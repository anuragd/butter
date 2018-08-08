```jsx noeditor
<ProgressBarMini progress={50}/>
```
```jsx static
import { ProgressBarMini } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <ProgressBarMini 
            progress={50}/>
    )
}

```
Attaching the `failed` boolean prop will display the progress bar in a failed mode. Use this state to inform the user that the action has failed.
```jsx noeditor
<ProgressBarMini progress={80} failed/>
```
```jsx static
import { ProgressBarMini } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <ProgressBarMini 
            progress={80}
            failed/>
    )
}

```