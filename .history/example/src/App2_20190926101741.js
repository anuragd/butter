import React, { Component } from "react";

import { Container, Header, Content, Panel } from "dcn-network-insights-ux";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Panel
            size="threequarter"
            collapse={{ top: true, right: true, bottom: true }}
          ></Panel>
        </Header>
        <Content></Content>
      </Container>
    );
  }
}
