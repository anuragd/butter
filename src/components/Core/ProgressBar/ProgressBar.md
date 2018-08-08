```jsx noeditor
<ProgressBar progress={50} message="Please wait while we auto-configure the application"/>
```
```jsx static
import { ProgressBar } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <ProgressBar 
            progress={50} 
            message="Please wait while we auto-configure the application" />
    )
}

```

Attaching the `failed` boolean prop will display the progress bar in a failed mode. Use this state to inform the user that the action has failed, and why it has failed
```jsx noeditor
<ProgressBar progress={90} message="Lost network connectivity" failed/>
```
```jsx static
import { ProgressBar } from 'dcn-network-insights-ux';

...
...

render() {
    return (
        /* Rest of your markup */
        <ProgressBar 
            progress={90} 
            message="Lost network connectivity"
            failed />
    )
}

```