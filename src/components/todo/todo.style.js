import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 10px 8px;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  flex: 1;
  margin-right: 20px;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'inherit')};
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  border-radius: 0 0 5px 5px;
  padding: 3px;
  grid-gap: 16px;
  transition: transform 200ms ease-in-out;
  display: ${props => (props.isVisible ? 'grid' : 'none')};

  @media screen and (max-width: 450px) {
    width: 100%;
    display: ${props => (props.isVisible ? 'grid' : 'none')};
    transform: ${props =>
      props.isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  }
`;

export const Del = styled.button`
  height: 30px;
  width: 100%;
  cursor: pointer;
  background-color: lightgray;
  border: none;
  padding: 2px;
  border-radius: 5px;
`;

export const Done = styled(Del)``;

export const Checkbox = styled.input`
  margin-top: 3px;
`;
