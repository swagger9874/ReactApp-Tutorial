import React from 'react'

const Show = props => (
    <div className="mb-4 ml-4 mr-4">
        <div className="card text-white bg-dark mb-3">
            <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
                <h4 className="d-inline">{props.user.name}</h4>
                <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
            </div>
            <div className="card-body">
                <p className="card-text">Maaş : {props.user.salary}</p>
                <p className="card-text">Departman : {props.user.department}</p>
            </div>
        </div>
    </div>
)

export default Show