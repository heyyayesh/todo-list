import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 10px 8px;
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  flex: 1;
  margin-right: 20px;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'inherit')};
`;

export const Del = styled.button`
  height: 25px;
  width: 25px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const Done = styled(Del)``;
