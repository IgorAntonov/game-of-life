import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  padding: 5px;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 7px 20px;
  border: none;
  border-radius: 4px;
  
  background-color: #3f51b5;
  color: #fafafa;
  font-weight: bold;
  cursor: pointer;
  
  transition: 0.3s all;
  :hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`;

export const P = styled.p`
  margin: 0;
  padding-right: 10px;
  color: gray;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: 4px;

  color: gray;
`;
