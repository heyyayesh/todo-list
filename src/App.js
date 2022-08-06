import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import Todo from './components/todo/Todo';
import { db } from './firebase';
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
} from './app.style';

function App() {
  const [isEmpty, setIsEmpty] = useState(false);

  const [todos, setTodos] = useState([]);

  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    setIsEmpty(!todos.length);
  }, [todos]);

  const handleChange = e => {
    setTodoText(e.target.value);
  };

  // Create todos

  const addTodo = async () => {
    if (todoText === '' || todoText === null) return;

    const docRef = await addDoc(collection(db, 'todos'), {
      title: todoText,
      isDone: false,
    });
    console.log('Document written with id' + docRef.id);

    setTodoText('');
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
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
      <Container>
        {isEmpty ? (
          <EmptyMsg>Yay! You have completed all the tasks!</EmptyMsg>
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
