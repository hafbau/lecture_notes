import React from 'react';
import useInput from '../hooks/useInput';

const Input = () => {
  const [username, onChangeUsername] = useInput('hafiz');
  const [password, onChangePassword] = useInput('');

  const onSubmit = () => {
    alert(`Thanks for logging in ${username} with password ${password}`);
  };

  return (
    <div>
      <h2>Use Input</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
          id="username"
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          id="password"
        />
        <br/>
        <button type="submit">Don't Press</button>
      </form>
    </div>
  );
};

export default Input;