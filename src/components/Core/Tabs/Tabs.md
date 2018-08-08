```js noeditor
initialState = {
    options: ['Tab 1','Tab 2','Tab 3','Tab 4'],
    activeTab: 'Tab 2',
};
<Tabs options={state.options} activeTab={state.activeTab} onChange={(val,key) => setState({activeTab:val})}/>
```
```jsx static
import { Tabs } from 'dcn-network-insights-ux';

...
...

onChange(value, index) {
    this.setState({ activeTab: value })
}
 
render() {
    return (
        ... /* The rest of your markup */
        <Tabs
            options = {this.state.options}
            activeTab = {this.state.activeTab}
            onChange = {this.onChange}
            />
    );
}
```