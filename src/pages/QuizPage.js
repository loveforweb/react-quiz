import React, { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';

const QuizPage = () => {
  const todos = useStoreState(state => state);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>Quiz page</h1>
    </div>
  );
};

export { QuizPage as default };
