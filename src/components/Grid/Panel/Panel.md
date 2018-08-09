```jsx noeditor
<div style={{background:'#F4F4F4'}}>
    <Panel size="full">
        <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}} hasSurface>
            Half Panel Content
        </Panel>
        <Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}} hasSurface>
            Half Panel Content
        </Panel>
    </Panel>
</div>
```
```jsx static
import React from 'react';
import { Container, Content, Panel } from 'dcn-network-insights-ux';

import YourHeader from 'location/of/your/header/component';

export default class App extends React.Component {

	render() {
		<Container>
			<YourHeader />
			<Content>

                // This panel will render padding on all four sides and have 
                // no background color(missing hasSurface)
                // since this is not a direct parent to any content 
				<Panel size="full">

                    // Collapsing padding on all sides to avoid double gaps.
                    // Note the hasSurface prop in included since we want this 
                    // to have a white background
					<Panel size="half" collapse={{top:true,right:true,bottom:true,left:true}} hasSurface>
						Half Panel Content
					</Panel>

                    // Leaving the left padding on the second Panel to cause a 
                    // 24px gap between the two sibling Panels
					<Panel size="half" collapse={{top:true,right:true,bottom:true}} hasSurface>
						Half Panel Content
					</Panel>
                    
				</Panel>
			</Content>
		</Container>
	}

}
```