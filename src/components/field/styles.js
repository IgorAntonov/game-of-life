import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  width: ${p => `${p.width}px`};
`;

export const Cell = styled.div`
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  border: 1px solid lightsteelblue;
  
  cursor: pointer;
  background-color: ${({ status }) => (status ? 'green' : '#fff')};
`;
