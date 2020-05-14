import React from 'react';
import useInput from '../../hooks/useInput';

const useForm = (defaultVal) => {
  const [formValues, setFormVals] = React.useState(defaultVal);

  const onChange = (event) => {
    const { target: { value, name } } = event;
    // const newState = { ...formValues };
    // newState[name] = value;
    setFormVals({
      ...formValues,
      [name]: value
    })
  }

  return [formValues, onChange];
}

const Input = () => {
  const [formValues, onChange] = useForm({
    username: '',
    password: '123'
  })
  
  const { username, password } = formValues;
  // const [username, onChangeUsername] = useInput('hafiz');
  // const [password, onChangePassword] = useInput('');

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
          onChange={onChange}
          id="username"
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          id="password"
        />
        <br/>
        <button type="submit">Don't Press</button>
      </form>
    </div>
  );
};

export default Input;