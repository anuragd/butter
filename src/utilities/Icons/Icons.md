To use icons in this library, import the IconLib package and use like this
```jsx noeditor
<div style={{display:'flex', width: '100%', justifyContent:'space-between'}}>
    <img src={require("./Icons").IconLib.add_tile} style={{height:"30px"}}/>
    <img src={require("./Icons").IconLib.cpu_black} style={{height:"30px"}} />
    <img src={require("./Icons").IconLib.memory_black} style={{height:"30px"}} />
    <img src={require("./Icons").IconLib.temperature_black} style={{height:"30px"}} />
    <img src={require("./Icons").IconLib.temperature} style={{height:"30px"}} />
    <img src={require("./Icons").IconLib.settings} style={{height:"30px"}} />
    <img src={require("./Icons").IconLib.help} style={{height:"30px"}} />
</div>
```
```jsx static
import { IconLib } from 'dcn-network-insights-ux';
<img src={IconLib.settings} />
```
The following is a list of available icons:
* add_tile
* cpu_black
* memory_black
* temperature_black
* temperature
* settings
* help