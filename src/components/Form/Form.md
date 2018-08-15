The form package of the library consists of all library components that allow for user inputs. These are meant to serve as drop-in replacements for native HTML components.

All form components are built as controlled React components. This makes it essential that you add change the value prop you are passing to any of these components when it's onChange function is fired. See examples for clarity.

[A good readup on controlled components here](https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/)

Included components include:
* Input (Text/Number)
* TextArea
* Radio
* Checkbox
* DatePicker
* Slider (Number)
* Toggle
* Dropdown

The included components can be imported individually like so:
```jsx static
import { Input } from 'dcn-network-insights-ux';
import { TextArea, Radio } from 'dcn-network-insights-ux';
...
render() {
    <Input label="Label" value="Value" /> 
}
```
or as the entire sub-package like so:
```jsx static
import { Form } from 'dcn-network-insights-ux';
...
render() {
    <Form.Input label="Label" value="Value" /> 
}
```

All components in this package provide `onMouseEnter`,`onMouseLeave`,`onFocus` and `onBlur` props. All of these callbacks are fired with the `e` mouseEvent. However, be highly cautious of basing any of your logic based on information contained within this `e` object as they are mostly non-sensical and based on the component's on internal implementation. This param is only being passed to maintain consistency of these handlers.