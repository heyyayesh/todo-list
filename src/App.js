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
  EmptyMsg,
  Loading,
} from './app.style';

function App() {
  const [isAllDone, setIsAllDone] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [todos, setTodos] = useState([]);

  const [todoText, setTodoText] = useState('');

  const handleChange = e => {
    setTodoText(e.target.value);
  };

  // Create todos

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = async () => {
    if (todoText === '' || todoText === null) return;

    console.log('adding todo');
    await addDoc(collection(db, 'todos'), {
      title: todoText,
      isDone: false,
    });

    console.log('added todo');
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
      setTodos(todosArr);
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
      isDone: true,
    });
  };

  // Delete todos

  const deleteTodo = async id => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <Wrapper>
      {isAllDone && <Confetti />}
      <Container>
        {isEmpty ? (
          <Loading>You have nothing to do! 😳</Loading>
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
