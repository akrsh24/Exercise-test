import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './css/Home.css'
import Trades from './Trades/Trades'
import TradeStore from './Store/TradeStore';

const tStore = new TradeStore();

class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">Metallica</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <Link class="nav-link " id="trades-tab" data-toggle="tab" to='/trades' role="tab" aria-controls="trades" aria-selected="true">TRADES</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" id="transfers-tab" data-toggle="tab" to='' role="tab" aria-controls="transfers" aria-selected="false">TRANSFERS</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" id="transports-tab" data-toggle="tab" to='' role="tab" aria-controls="transports" aria-selected="false">TRANSPORTS</Link>
                                </li>
                            </ul>
                            <img src="./images/avatar2.png" alt="Avatar" class="avatar" />

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade " id="trades" role="tabpanel" aria-labelledby="trades-tab"></div>
                                <div class="tab-pane fade" id="transfers" role="tabpanel" aria-labelledby="transfers-tab"></div>
                                <div class="tab-pane fade" id="transports" role="tabpanel" aria-labelledby="transports-tab"></div>
                            </div>
                        </div>
                    </nav>
                    <hr />
                    <div className="container" style={{ 'marginTop': '2%' }}>
                        <div className="well">
                            <div>
                                <Route path="/trades" component={(props) => <Trades {...props} store={tStore} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Home;