The core package of the library consists of a set of basic components designed for building application interfaces. Currently, these include:
* Button
* ProgressBar
* ProgressBarMini
* Table
* Tabs
* Tooltip

In the future, this package will also consist of basic information display components that integrate color and typography styling such as:
* Blockquote
* Well
* Numeric info box
* Toasts
* Loaders etc.

The included components can be imported individually like so:
```jsx static
import { Button } from 'dcn-network-insights-ux';
import { Button, Table } from 'dcn-network-insights-ux';
...
...
render() {
    <Button label="Button" />
}
```
or as the entire sub-package like so:
```jsx static
import { Core } from 'dcn-network-insights-ux';
...
...
render() {
    <Core.Button label="Button" />
}
```