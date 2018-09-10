import React, { Component } from 'react';
import styled from 'styled-components';

import { Field } from './components/field';
import { ControlPanel } from './components/control-panel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(#b2dfdb, #fff);
`;

export class App extends Component {
  state = {
    rows: 30,
    cols: 30,
    speed: 100,
    grid: Array(30).fill().map(() => Array(30).fill(false))
  }

  createIteration = () => {
    const { grid, cols, rows } = this.state;

    const newGrid = grid.map((row, i) => row.map((col, j) => {
      let count = 0;
      if (i > 0) if (grid[i - 1][j]) count += 1;
      if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count += 1;
      if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count += 1;
      if (j < cols - 1) if (grid[i][j + 1]) count += 1;
      if (j > 0) if (grid[i][j - 1]) count += 1;
      if (i < rows - 1) if (grid[i + 1][j]) count += 1;
      if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count += 1;
      if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) count += 1;
      if (grid[i][j] && (count < 2 || count > 3)) return false;
      if (!grid[i][j] && count === 3) return true;
      return col;
    }));

    this.setState({ grid: newGrid });
  }

  selectCell = (row, col) => () => {
    const { grid } = this.state;
    const clone = [...grid];
    clone[row][col] = !clone[row][col];
    this.setState({ grid: clone });
  }

  play = () => {
    const { speed } = this.state;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.createIteration, speed);
  }

  stop = () => {
    clearInterval(this.intervalId);
  }

  clearBoard = () => {
    clearInterval(this.intervalId);
    this.setState({
      grid: Array(30).fill().map(() => Array(30).fill(false))
    });
  }

  randomSeed = () => {
    const { grid } = this.state;
    const randomBool = () => Math.random() > 0.6;

    const newGrid = grid.map(row => row.map(() => randomBool()));
    this.setState({ grid: newGrid });
  }

  handleSpeed = e => this.setState({
    speed: e.target.value
  });

  changeSpeed = e => {
    if (e.which === 13) {
      this.play();
    }
  }

  render() {
    const {
      rows, cols, speed, grid
    } = this.state;
    return (
      <Wrapper>
        <ControlPanel
          seed={this.randomSeed}
          play={this.play}
          stop={this.stop}
          clearBoard={this.clearBoard}
          speed={speed}
          handleSpeed={this.handleSpeed}
          changeSpeed={this.changeSpeed}
        />
        <Field
          grid={grid}
          selectCell={this.selectCell}
          rows={rows}
          cols={cols}
        />
      </Wrapper>
    );
  }
}
