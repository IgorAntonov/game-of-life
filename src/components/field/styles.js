import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  width: ${p => `${p.width}px`};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Cell = styled.div`
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  border: 1px solid lightsteelblue;
  
  cursor: pointer;
  background-color: ${({ status }) => (status ? '#673ab7' : '#fafafa')};
`;
