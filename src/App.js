import { useState } from 'react';
import { v4 } from 'uuid';
import Todo from './components/todo/Todo';
import { Wrapper, Container, AddTodo, Input, Button } from './app.style';

function App() {
  const [todos, setTodos] = useState([
    {
      id: v4(),
      title: 'This is a sample todo.',
      isDone: false,
    },
    {
      id: v4(),
      title: 'This is another todo.',
      isDone: true,
    },
  ]);

  const [todoText, setTodoText] = useState('');

  const handleChange = e => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    if (todoText === '' || todoText === null) return;

    setTodos([
      ...todos,
      {
        id: v4(),
        title: todoText,
        isDone: false,
      },
    ]);

    setTodoText('');
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completeTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        else return { ...todo, isDone: true };
      })
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Wrapper>
      <Container>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            num={index}
            title={todo.title}
            id={todo.id}
            isDone={todo.isDone}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Container>

      <AddTodo>
        <Input
          value={todoText}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder='Enter todo here'
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </AddTodo>
    </Wrapper>
  );
}

export default App;
