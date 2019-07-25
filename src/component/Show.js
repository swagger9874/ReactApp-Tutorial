import React from 'react'

const Show = props => (
    <div className="mb-4 ml-4 mr-4">
        <div className="card text-white bg-danger mb-3">
            <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
                <h4 className="d-inline">{props.user.name}</h4>
                <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
            </div>
            {
                props.user.working ? null : 
                    <div className = "d-flex justify-content-center m-2">
                        <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
            <div className="card-body">
                <p className="card-text">Maaş : {props.user.salary}</p>
                <p className="card-text">Departman : {props.user.department}</p>
            </div>

        </div>

    </div>
)



export default Show