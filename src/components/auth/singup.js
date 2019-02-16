import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import burl from '../../url';
// import axios from 'axios';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      email: '',
      password: '',
      user_type: ""
    }
  }
  handleClick(event) {
    console.log(this.state)
    let data = {
      username: this.state.username,
      password: this.state.password,
      user_type: this.state.user_type,
      phone: this.state.phone,
      email: this.state.email

    }
    console.log(data)



    console.log("login button pressed")
    fetch(burl + "/api/auth/signup/", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        if (!res.error)
          localStorage.setItem("token", res.token);
        console.log(res);

        console.log(localStorage.getItem("token"))
      })
      .catch(function (e) {
        console.log(e); // "oh, no!"
      })
  }

  handleChange = event => {
    this.setState({ user_type: event.target.value });
  };
  render() {
    return (
      <div className='signup'>
        <div className="display-4 text-center">
          Signup
        </div>
        <div>
          <AppBar
            title="Register"
          />
          <div>
            <TextField
              inputRef={el => this.a = el}
              label="username"
              margin="normal"
              hintText="Enter your Username"
              floatingLabelText="Username"
              value={this.state.value}
              onChange={(event, newValue) => {
                this.setState({ username: this.a.value })
              }}
            />
          </div>
          <div>
            <TextField
              inputRef={el => this.b = el}

              label="password"
              margin="normal"
              hintText="Enter your password"
              floatingLabelText="password"
              value={this.state.value}
              onChange={(event, newValue) => {
                this.setState({ password: this.b.value })
              }}
            />
          </div>
          <div>
            <TextField
              inputRef={el => this.c = el}

              label="email"
              margin="normal"
              hintText="Enter your email"
              floatingLabelText="email"
              value={this.state.value}
              onChange={(event, newValue) => {
                this.setState({ email: this.c.value })
              }}
            />
          </div>
          <div>
            <TextField
              inputRef={el => this.d = el}

              label="phone"
              margin="normal"
              hintText="Enter your phone"
              floatingLabelText="phone"
              value={this.state.value}
              onChange={(event, newValue) => {
                this.setState({ phone: this.d.value })
              }}
            />
          </div>
          <div>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <FormControl component="fieldset" >
            <RadioGroup
              aria-label="Role"
              name="Role"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="Startup Worker" control={<Radio />} label="Startup Worker" />
              <FormControlLabel value="Receptionist" control={<Radio />} label="Receptionist" />
              <FormControlLabel value="Librarian" control={<Radio />} label="Librarian" />
              <FormControlLabel value="Gaurd" control={<Radio />} label="Gaurd" />
              <FormControlLabel value="Cafeteria" control={<Radio />} label="Cafeteria" />
              <FormControlLabel value="Others" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Submit
            </Button>
        </div>
      </div>
    );
  }
}
export default Register;