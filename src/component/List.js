import React, { Component } from 'react'
import Axios from 'axios';
import ListItem from "./ListItem"
import MergeItem from "./MergeItem"

class List extends Component {
    state = {
        list: [],
        merge: []
    }


    componentDidMount() {
        Axios.get("https://my-json-server.typicode.com/swagger9874/dataBase/db")
            .then(res => {
                this.setState({ list: res.data.list })
                this.setState({ merge: res.data.merge })
            })
    }

    render() {
        const { list, merge } = this.state

        return (
            <div className="row">
                <div className="container col-sm-5">
                    <h2>Liste</h2>
                    <hr />
                    {list.lenght ? null :
                        list.map(listItem => {
                            return (
                                <ListItem
                                    key={listItem.id}
                                    listItem={listItem} />
                            )
                        })}
                </div>
                    <div className="wrapper">
                        <button type="button" className="btn btn-dark mt-3">=></button>
                    </div>
                <div className="container col-sm-5">
                    <h2>Merge</h2>
                    <hr />
                    {
                        merge.map(mergeItem => {
                            return (<MergeItem
                                key={mergeItem.id}
                                mergedItem={mergeItem}
                            />)
                        })
                    }
                </div>
            </div>
        )

    }

}

export default List