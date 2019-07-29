import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Users from './component/Users'
import Navbar from './component/Navbar'
import List from './component/List'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/list" component={List} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
