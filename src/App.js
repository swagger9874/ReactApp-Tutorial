import React, { Component } from 'react'
import './App.css'
import Users from "./component/Users"
import UserList from "./component/UsersList.json"





class App extends Component {
  state = {
    users: UserList
  }




  render() {
    return (
      <div>
        {
          this.state.loading ?
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div> : null
        }
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
