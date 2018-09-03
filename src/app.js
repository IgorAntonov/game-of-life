import React, { Component } from 'react';
import styled from 'styled-components';

import { Field } from './components/field';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  background: grey;
`;

export class App extends Component {
  state = {
    rows: 30,
    cols: 30,
    speed: 100
  }

  render() {
    const { rows, cols, speed } = this.state;
    return (
      <Wrapper>
        <Field
          rows={rows}
          cols={cols}
          speed={speed}
        />
      </Wrapper>
    );
  }
}
