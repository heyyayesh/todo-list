import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 40px 20px;
  gap: 50px;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AddTodo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  height: 30px;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid rgb(130, 130, 130);
  outline: none;
  text-indent: 5px;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 0 8px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px lightgray;

  :active {
    transform: scale(0.9);
  }
`;

export const EmptyMsg = styled.h1`
  font-family: sans-serif;
`;