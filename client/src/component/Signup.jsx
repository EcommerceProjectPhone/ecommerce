import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const Signup = ({ handleLogin }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [imgUrl, setImgUrl] = useState('');

  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/register', { username, email, password, role, imgUrl });
      const token = response.data.token;
      handleLogin(token);
      history.push('/home');
    } catch (error) {
      console.error('Register Error:', error);
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            required
          />
          <TextField
            fullWidth
            label="ImageUrl"
            placeholder="Enter your ImageUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              aria-label="Role"
              name="Role"
              style={{ display: 'initial' }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel value="client" control={<Radio />} label="Client" />
              <FormControlLabel value="seller" control={<Radio />} label="Seller" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
