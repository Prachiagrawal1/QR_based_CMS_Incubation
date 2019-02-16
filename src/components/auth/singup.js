import React, { Component } from 'react';
import burl from '../../url';

// import axios from 'axios';
class Register extends Component {
  state = {
    error: false
  }

  componentDidMount = () => {
    // let form = document.querySelector('.signup-form')
    this.username = document.querySelector('#username')
    this.password = document.querySelector('#password')
    this.email = document.querySelector('#email')
    this.phone = document.querySelector('#phone')
    this.user_type = document.querySelector('#user_type')
  }
  
  
  signup_handler = (event) => {
    event.preventDefault()
    let data = {
      username: this.username.value,
      password: this.password.value,
      phone: this.phone.value,
      email: this.email.value,
      user_type: this.user_type.value,
    }
    console.log(data);


    fetch(burl + "/api/auth/signup/", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if (!res.error){
          localStorage.setItem("token", res.token);
          this.props.history.push('/dashboard/')
        }else{
          this.setState({
            ...this.state,
            error: 'Please the check the inputs'
          })// end of setstate
        }

        console.log(localStorage.getItem("token"))
      })
      .catch(function (e) {
        console.log(e); // "oh, no!"
      })
  }

  render() {
    return (
      <div className="signup">
        <div className="text-danger">{this.state.error}</div>
        <h3 className="text-center">Signup</h3>
        <form className='signup-form'>
          <div class="input-group mt-3">
            <div class="input-group-prepend">
              <button disabled className="btn btn-success">
                <i className="fas fa-user"></i>
              </button>
            </div>
            <input type="text" class="form-control" id='username' placeholder="Username" />
          </div>

          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <button disabled className="btn btn-success">
                <i className="fas fa-key"></i>
              </button>
            </div>
            <input type="password" class="form-control" id='password' placeholder="Password" />
          </div>

          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <button disabled className="btn btn-success">
                <i className="fas fa-envelope"></i>
              </button>
            </div>
            <input type="email" class="form-control" id='email' placeholder="Email" />
          </div>

          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <button disabled className="btn btn-success">
                <i class="fas fa-mobile"></i>
              </button>
            </div>
            <input type="text" class="form-control" id='phone' placeholder="Phone" />
          </div>
          <div className="input-group mt-2">
            <select id="user_type" className='form-control'>
              <option value="Startup Worker">Startup Worker</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Librarian">Librarian</option>
              <option value="Startup">Startup</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="text-center">
            <button
              onClick={this.signup_handler}
              className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    )

  }
}

export default Register;