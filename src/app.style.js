import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 40px 20px;
  min-height: 100vh;

  @media screen and (max-width: 450px) {
    padding: 0px 0px 30px 0px;
    justify-content: start;
  }
`;

export const Header = styled.h1`
  font-family: sans-serif;
  margin: 20px;
  background-color: lightgray;
  width: 100%;
  text-align: center;
  padding: 8px;
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 8px;

  @media screen and (max-width: 450px) {
    padding: 16px;
    box-shadow: none;
    flex: 1;
  }
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
  box-shadow: 0 0 5px #c493ff;

  :active {
    transform: scale(0.9);
  }
`;

export const EmptyMsg = styled.h1`
  font-family: sans-serif;
`;

export const Loading = styled(EmptyMsg)`
  text-align: center;
  margin: auto;
`;
