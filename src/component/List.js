import React, { Component } from 'react'
import Axios from 'axios';
import ListItem from "./ListItem"
import MergeItem from "./MergeItem"
import _ from 'lodash';

class List extends Component {
    state = {
        list: [],
        merge: [],
        checked: [],
        toMerge: {}
    }
    componentDidMount() {
        Axios.get("https://my-json-server.typicode.com/swagger9874/dataBase/db")
            .then(res => {
                this.setState({ list: res.data.list })
                this.setState({ merge: res.data.merge })
            })
    }

    listItemClicked(listItem1) {
        var findListItem1 = _.find(this.state.checked, function (f) { return f.id === listItem1.id });
        if (findListItem1 === null || findListItem1 === undefined) {
            const addChecked = [...this.state.checked, listItem1]
            this.setState({ checked: addChecked })
        } else {
            var index = _.findIndex(this.state.checked, function (f) { return f.id === listItem1.id });
            const addChecked = [...this.state.checked]
            addChecked.splice(index, 1)
            this.setState({ checked: addChecked })
        }
    }
    mergeItemClicked(mergeItem1) {
        this.setState({ toMerge: mergeItem1 })
    }
    matchItems(checked, toMerge, merge) {
        const merge1 = [...merge]
        const checked1 = [...checked]
        console.log(checked1)
        const toMerge1 = toMerge

        Axios.get("https://my-json-server.typicode.com/swagger9874/dataBase/merge")
            .then(res => {
                res.data.map(item => {
                    if (toMerge1.id === item.id) {
                        item.mergedId = [...checked1, ...item.mergedId]
                        var index = _.findIndex(this.state.merge, { id: item.id });
                        merge1.splice(index, 1)
                        merge1.push(item)
                        this.setState({ merge: merge1 })
                        console.log(this.state.merge)
                    }return

                })
            }).catch(err => {
                console.log(err)
            })

        Axios.post("https://my-json-server.typicode.com/swagger9874/dataBase/merge", this.state.merge)
            .then(res => {
                    console.log(res)
                
            }).catch(err => {
                console.log(err)
            })

        var array = _.difference(this.state.list, this.state.checked)
        this.setState({ list: array })
        this.setState({ checked: [] })

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
                                    listItem={listItem}
                                    onClick={(listItem) => this.listItemClicked(listItem)}
                                />
                            )
                        })}
                </div>
                <div className="wrapper">
                    <button type="button" className="btn btn-dark mt-3" onClick={() =>
                        this.matchItems(this.state.checked, this.state.toMerge, merge)}>=></button>
                </div>
                <div className="container col-sm-5">
                    <h2>Merge</h2>
                    <hr />
                    {
                        merge.map(mergeItem => {
                            return (<MergeItem
                                key={mergeItem.id}
                                mergedItem={mergeItem}
                                onClick={(mergeItem) => this.mergeItemClicked(mergeItem)}
                            />)
                        })
                    }
                </div>
            </div>
        )

    }

}

export default List