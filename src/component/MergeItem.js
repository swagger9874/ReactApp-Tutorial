import React from "react"

const MergeItem = (props) => (
    <div className="card text-white bg-dark mb-3">
        <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
            <div className="custom-control custom-radio">
                <input type="radio" id={props.mergedItem.id} name="customRadio" className="custom-control-input ml-5 mb-3"  
                        onClick={() => console.log(props.mergedItem)} />
                <label className="custom-control-label" htmlFor={props.mergedItem.id} >
                    <h4 className="d-inline mb-5">{props.mergedItem.name}</h4>
                </label>
            </div>
        </div>
    </div>
)
export default MergeItem