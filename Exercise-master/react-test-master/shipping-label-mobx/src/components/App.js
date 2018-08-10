import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css';
import Home from './Home'
import Sender from './SenderForm';
import Receiver from './ReceiverForm';
import Display from './Display';
import Transaction from './Transaction';
import { Provider } from 'mobx-react';
import UserStore from './Store'


const store = new UserStore();

class App extends Component {
  render() {
    return (

      <Router>
        <Provider store={store}>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">Shipping-Generator</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/"> Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sender"><i className="fa fa-user-plus" ></i>Add Details</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container" style={{ 'marginTop': '2%' }}>
              <div className="well">
                <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/sender" component={Sender} />
                  <Route path="/receiver" component={Receiver} />
                  <Route path="/display" component={Display} />
                  <Route path="/transaction" component={Transaction} />
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;