import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cell, Container } from './styles';

export class Field extends Component {
  static propTypes = {
    cols: PropTypes.number.isRequired,
    selectCell: PropTypes.func.isRequired,
    grid: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.bool)
    ).isRequired
  }

  createGrid = () => {
    const { grid, selectCell } = this.props;

    return grid.reduce((acc, row, i) => {
      const cellsRow = row.map((col, j) => {
        const id = `${i}_${j}`;
        const isAlive = grid[i][j];
        return (
          <Cell
            status={isAlive}
            key={id}
            id={id}
            row={i}
            col={j}
            onClick={selectCell(i, j)}
          />
        );
      });
      return [...acc, ...cellsRow];
    }, []);
  }

  render() {
    const { cols } = this.props;
    const width = cols * 14;

    return (
      <Container width={width}>
        {this.createGrid()}
      </Container>
    );
  }
}
