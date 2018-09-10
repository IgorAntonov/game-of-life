import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Button,
  Flex,
  Input,
  P
} from './styles';

export const ControlPanel = ({
  play, seed, stop, clearBoard,
  speed, handleSpeed, changeSpeed
}) => (
  <Wrapper>
    <Flex>
      <Button
        type="Button"
        onClick={play}
      >
        PLAY
      </Button>
      <Button
        type="Button"
        onClick={stop}
      >
        STOP
      </Button>
      <Button
        type="Button"
        onClick={seed}
      >
        SEED
      </Button>
      <Button
        type="Button"
        onClick={clearBoard}
      >
        CLEAR
      </Button>
    </Flex>
    <Flex>
      <P>
        Set interval:
      </P>
      <Input
        type="number"
        value={speed}
        onChange={handleSpeed}
        onKeyDown={changeSpeed}
      />
    </Flex>
  </Wrapper>
);

ControlPanel.propTypes = {
  play: PropTypes.func.isRequired,
  seed: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  handleSpeed: PropTypes.func.isRequired,
  changeSpeed: PropTypes.func.isRequired
};
