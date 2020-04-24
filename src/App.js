import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main'
import LogInControl from './Components/Signin'
// import { TextField, Button } from '@material-ui/core'

class App extends Component {
  state = {
    isLoggedIn: false,
    userName: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogin = () => {
    if (this.state.userName === "faiz" && this.state.password === "123") {
      return (
        this.setState({
          isLoggedIn: true,
          userName: '',
          password: ''
        })
      )
    } else {
      alert("Invalid Username or password")
    }
  }
  handleLogOut = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div className="App" >
        <div className="Content">
          {
            this.state.isLoggedIn ? <Main handleLogOut={this.handleLogOut} /> : <LogInControl
              userName={this.state.userName}
              password={this.state.password}
              isLoggedIn={this.state.isLoggedIn}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;