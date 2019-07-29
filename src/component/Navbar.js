import React from "react"
import {Link} from 'react-router-dom'

const Navbar = props => {
    return(
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
            <button type="button" className="btn btn-secondary"> <Link to="/">Ana Sayfa</Link></button>
            <button type="button" className="btn btn-secondary ml-3"><Link to="/users">Kullanıcılar</Link></button>
            <button type="button" className="btn btn-secondary ml-3"><Link to="/list">Liste</Link></button>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <h5 className="text-white h4">User App</h5>
          </nav>
        </div>
    )
}
export default Navbar;