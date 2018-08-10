import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css';
import Home from './Home'
import Sender from './SenderForm';
import Receiver from './ReceiverForm';
import Display from './Display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sname: '',
      scity: '',
      rname: '',
      rcity: ''
    }

    this.addDetails = this.addDetails.bind(this);
  }
  addDetails(type, newDetail) {
    if (type === 'sender') {
      this.setState({
        sname: newDetail.name,
        scity: newDetail.city
      })
    }
    else if (type === 'receiver') {
      this.setState({
        rname: newDetail.name,
        rcity: newDetail.city
      })
    }
  }

  render() {
    return (
      <Router >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Shipping-Generator</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/"> Home <span class="sr-only">(current)</span></Link>
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
                <Route path="/sender" component={(props) => <Sender {...props} addDetails={this.addDetails} />} />
                <Route path="/receiver" component={(props) => <Receiver {...props} addDetails={this.addDetails} />} />
                <Route path="/display" component={(props) => <Display {...props} displayInfo={this.state} />} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;