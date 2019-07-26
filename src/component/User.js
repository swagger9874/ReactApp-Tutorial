import React from 'react'



const User = props => (
    <div className="mb-4 ml-4 mr-4">
        <div className="card text-white bg-dark mb-3">
            <div className="card-header d-flex justify-content-between"  onClick={() => props.onClick(props.user)} style={{ cursor: "pointer" }}>
                <h4 className="d-inline">{props.user.name}</h4>
                <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
            </div>
        </div>
    </div>
)

export default User;
