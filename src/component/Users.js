import React, { Component } from 'react'
import User from "./User"
import Show from "./Show"
import ShowLoading from "./ShowLoading"
import axios from "axios"

class Users extends Component {
    state = {
        users: [],
        loading : false
      }
    
      componentDidMount() {
        axios.get("https://my-json-server.typicode.com/swagger9874/dataBase/db")
          .then(res => {
            this.setState({ users: res.data.users })
          })
    
      }
      
    userClicked(user) {
        this.setState({loading : !this.state.loading})
        const Promises = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({ current: user })
                this.setState({loading : !this.state.loading})
                resolve(user)
            }, 1500)
        });
    }
    render() {
        const { users } = this.state
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h2>Çalışanlar</h2>
                    <hr />
                    {
                        users.lenght ?  null :
                        users.map(user => {
                            return (
                                <User key={user.id}
                                    user={user}
                                    onClick={(user) => this.userClicked(user)}
                                />
                            )
                        }) 
                    }
                </div>
                <div className="col-sm-6">
                    <h2>Bilgiler</h2>
                    <hr />
                    {this.state.loading ? <ShowLoading/> : this.state.current && <Show user={this.state.current}/>}
                </div>
            </div>
        )
    }
}
export default Users