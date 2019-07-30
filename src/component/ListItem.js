import React from 'react'

const ListItem = (props) => (
    <div className="mb-4 ml-4 mr-4">
        <div className="card text-white bg-dark mb-3">
            <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
                <div className="input-group-prepend">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input ml-5 mb-3" id={props.listItem.id} 
                                onClick = {() => props.onClick(props.listItem)}/>
                        <label className="custom-control-label" htmlFor={props.listItem.id}>
                            <h4 className="d-inline">{props.listItem.name}</h4>
                        </label>
                    </div>
                </div>

                <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>

            </div>
        </div>

    </div>

)

export default ListItem