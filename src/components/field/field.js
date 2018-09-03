import React, { Component } from 'react';

import { Cell, Container } from './styles';

export class Field extends Component {
  state = {
    grid: []
  }

  componentDidMount() {
    const { cols, rows } = this.props;
    const grid = Array(rows).fill().map(() => Array(cols).fill(false));
    this.setState({ grid });
  }


  render() {
    const { cols, rows } = this.props;
    const { grid } = this.state;

    if (grid.length === 0) return null;

    const width = cols * 14;
    const rowsArr = [];
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        const id = `${i}_${j}`;
        const cellStatus = grid[i][j] ? 'on' : 'off';
        rowsArr.push(
          <Cell
            status={cellStatus}
            key={id}
            id={id}
            row={i}
            col={j}
          />
        );
      }
    }
    return (
      <Container width={width}>
        {rowsArr}
      </Container>
    );
  }
}
