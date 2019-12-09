import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(props.count);
  };

  const changeText = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>
        The current {text || 'count'} is {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input type="text" value={text} onChange={changeText} />
    </div>
  );
};

App.defaultProps = {
  count: 0
};

ReactDOM.render(<App count={2} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
