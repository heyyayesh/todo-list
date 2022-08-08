import { useState, useEffect } from 'react';
import Todo from './components/todo/Todo';
import { db } from './firebase';
import Confetti from 'react-confetti';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import {
  Wrapper,
  Container,
  AddTodo,
  Input,
  Button,
  Header,
  Loading,
} from './app.style';

function App() {
  const [isAllDone, setIsAllDone] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [background, setBackground] = useState('');

  const handleChange = e => {
    setTodoText(e.target.value);
  };

  // Fetch background image from Bing Image of the Day

  useEffect(() => {
    async function fetchImg() {
      const response = await fetch('https://bing.biturl.top/');
      const data = await response.json();
      setBackground(data.url);
    }

    fetchImg();
  }, []);

  // Create todos

  const time = new Date().getTime();

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = async () => {
    if (todoText === '' || todoText === null) return;

    await addDoc(collection(db, 'todos'), {
      title: todoText,
      isDone: false,
      createdAt: time,
    });

    setTodoText('');
  };

  // Read todos

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let todosArr = [];
      querySnapshot.forEach(doc => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr.sort((a, b) => b.createdAt - a.createdAt));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setIsEmpty(!todos.length);
    setIsAllDone(!!todos.length && todos.every(todo => todo.isDone));
  }, [todos]);

  // Update todos

  const completeTodo = async id => {
    await updateDoc(doc(db, 'todos', id), {
      isDone: !todos.find(todo => todo.id === id).isDone,
    });
  };

  // Delete todos

  const deleteTodo = async id => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <Wrapper background={background}>
      <Header>Todo List</Header>
      {isAllDone && <Confetti />}
      <Container>
        {isEmpty ? (
          <Loading>You have nothing to do! 😳</Loading>
        ) : (
          todos.map(todo => (
            <Todo
              key={todo.id}
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
