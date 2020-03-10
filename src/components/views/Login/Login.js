import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <h2>Log in</h2>
    <form noValidate autoComplete="off">
      <TextField className={styles.textField} id="standard-basic" label="Login:" />
      <TextField
        className={styles.textField}
        id="standard-password-input"
        label="Password:"
        type="password"
        autoComplete="current-password"
      />
    </form>
    <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
      Submit
    </Button>
  </div>
);

export default Login;