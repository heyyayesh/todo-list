import React from 'react';
import delIcon from '../../deleteIcon.png';
import doneIcon from '../../done.png';
import { Container, Text, Controls, Del, Done, Checkbox } from './todo.style';

function Todo({ id, title, isDone, completeTodo, deleteTodo }) {
  const [visible, setVisible] = React.useState(false);

  const capitalizedTitle = title.slice(0, 1).toUpperCase() + title.slice(1);

  return (
    <Container
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <Text isDone={isDone}>
        <Checkbox
          type='checkbox'
          checked={isDone}
          onClick={() => completeTodo(id)}
          readOnly
        />
        {capitalizedTitle}
      </Text>

      <Controls isVisible={visible} onClick={() => setVisible(prev => !prev)}>
        <Done onClick={() => completeTodo(id)} isVisible={visible}>
          <img
            src={doneIcon}
            alt='done'
            style={{
              width: '25px',
              objectFit: 'cover',
            }}
          />
        </Done>

        <Del onClick={() => deleteTodo(id)}>
          <img
            src={delIcon}
            alt='delete'
            style={{
              width: '25px',
              objectFit: 'cover',
            }}
          />
        </Del>
      </Controls>
    </Container>
  );
}

export default Todo;
