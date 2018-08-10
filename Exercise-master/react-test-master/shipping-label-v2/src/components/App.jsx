import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css';
import Home from './Home'
import Sender from './Sender'
import Receiver from './Receiver'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Shipping-Generator</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sender"><i className="fa fa-user-plus" ></i>Add Details</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container" style={{ 'margin-top': '2%' }}>
            <div className="well">
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/sender" component={Sender} />
                <Route path="/receiver" component={Receiver} />
                {/* <Route path="/transaction" component={Transaction} /> */}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;