import React, { Component } from 'react';
import TradeForm from './TradeForm';
import PlainHome from '../PlainHome';
import TradeList from './TradeList';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import SearchBar from '../Trades/SearchBar';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Provider } from 'mobx-react'
import TradeStore from '../Store/TradeStore'

const httpLink = new HttpLink({ uri: 'http://localhost:7100/graphql' })
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const store = new TradeStore();

class Trades extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={store} >
                    <div className="container">
                        <Router>
                            <div className="">
                                <div className="">
                                    <SearchBar />
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-8">
                                        <TradeList />
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="col-sm-12 col-md-12">
                                            <Route path="/home" component={PlainHome} />
                                            <Route path="/tradeform" component={TradeForm} />
                                            {/* <Route path="/edit-trade/:idd/:commodity/:side/:quantity/:price/:counterparty/:location" component={TradeFormEdit} /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router>
                    </div>
                </Provider>
            </ApolloProvider>
        );
    }
}

export default Trades;
