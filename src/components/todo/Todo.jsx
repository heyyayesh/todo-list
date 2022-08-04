import React from 'react';
import delIcon from '../../deleteIcon.png';
import doneIcon from '../../done.png';
import { Container, Text, Del, Done } from './todo.style';

function Todo({ id, title, isDone, num, completeTodo, deleteTodo }) {
  const [delVisible, setDelVisible] = React.useState(false);

  return (
    <Container
      onMouseEnter={() => setDelVisible(true)}
      onMouseLeave={() => setDelVisible(false)}
    >
      <Text isDone={isDone}>
        {num + 1}. {title}
      </Text>

      <Done onClick={() => completeTodo(id)}>
        <img
          src={doneIcon}
          alt='done'
          style={{
            width: '100%',
            objectFit: 'cover',
            display: delVisible && !isDone ? 'block' : 'none',
          }}
        />
      </Done>

      <Del onClick={() => deleteTodo(id)}>
        <img
          src={delIcon}
          alt='delete'
          style={{
            width: '100%',
            objectFit: 'cover',
            display: delVisible ? 'block' : 'none',
          }}
        />
      </Del>
    </Container>
  );
}

export default Todo;
