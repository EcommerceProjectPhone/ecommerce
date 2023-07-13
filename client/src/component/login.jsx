import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const Login = ({ handleLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e'};
  const btnstyle = { margin: '8px 0' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { email, password });
      const token = response.data.token;
      handleLogin(token);
      history.push('/home');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
          <Typography>
            <Link to="/signup">Forgot password?</Link>
          </Typography>
          <Typography>
            Do you have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
