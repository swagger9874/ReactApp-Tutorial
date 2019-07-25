import React, { Component } from 'react'
import './App.css'
import Users from "./component/Users"
import axios from "axios"





class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/swagger9874/dataBase/db")
      .then(res => {
        this.setState({ users: res.data.users })
      })

  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <div>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
