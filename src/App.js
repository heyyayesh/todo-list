import { useState } from 'react';
import { v4 } from 'uuid';
import Todo from './components/todo/Todo';
import {
  Wrapper,
  Container,
  AddTodo,
  Input,
  Button,
  EmptyMsg,
} from './app.style';

function App() {
  const [isEmpty, setIsEmpty] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: v4(),
      title: 'This is an example todo.',
      isDone: false,
    },
    {
      id: v4(),
      title:
        'Tap or hover on this todo and then tap the tick mark to complete it.',
      isDone: false,
    },
    {
      id: v4(),
      title: 'Delete this todo.',
      isDone: false,
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
        {isEmpty ? (
          <EmptyMsg>Nalla, Berozgaar! Kuchh to karle!</EmptyMsg>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={todo.id}
              num={index}
              title={todo.title}
              id={todo.id}
              isDone={todo.isDone}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
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
