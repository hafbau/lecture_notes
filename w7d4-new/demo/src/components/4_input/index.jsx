import React from 'react';

const Input = () => {
  const [username, setUsername] = React.useState('hafiz')
  const onChangeUsername = (ev) => {
    const { target: { value } } = ev;
    setUsername(value)
  }


  const [password, setPassword] = React.useState('123secure')
  const onChangePassword = (ev) => {
    const { target: { value } } = ev;
    setPassword(value)
  }

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
          name="username"
          value={username}
          onChange={onChangeUsername}
          id="username"
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
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