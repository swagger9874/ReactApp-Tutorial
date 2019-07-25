import React, { Component } from 'react'
import User from "./User"
import Show from "./Show"
import Navbar from "./Navbar"

class Users extends Component {



    userClicked(user) {
        this.setState({ current: false })
        
        const Promises = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({ current: user })
                resolve(user)
            }, 2000)


        });

        const working = function () {

            Promises.then(data => {
                console.log(data)
            }).catch(data => {
                console.log(data)
            })

        }
        working();
    }

    render() {

        const { users } = this.props



        return (
            <div className="row">
                <div className="col-sm-6">
                    <Navbar title="Çalışanlar" />
                    <hr />
                    {
                        users.lenght ? null :
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
                    <Navbar title="Bilgiler" />
                    <hr />
                    
                    {this.state && <Show user={this.state.current} />}


                </div>
            </div>
        )
    }
}
export default Users