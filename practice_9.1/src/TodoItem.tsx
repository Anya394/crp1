import { memo, useMemo } from 'react';

const TodoItem = memo(({ text, completed, onClick }: any) => {
    // Simulate expensive rendering
    const heavyComputation = useMemo(() => {
      let sum = 0;
      for (let i = 0; i < 10000; i++) sum += i;
      return sum;
    }, []);
  
    heavyComputation;
  
    return (
      <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </li>
    );
  });

export default TodoItem;