import React, { Component } from 'react';
import { graphql, Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import {
    Link
} from 'react-router-dom'
import ApolloClient from "apollo-boost";
import TradeData from './TradeData'
const client = new ApolloClient({
    uri: `http://localhost:7100/graphql`
});



class TradeList extends Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <div className="card">
                    <div className="card-header">

                        <h2> Trade<Link className="btn btn float-right btn-round" to="/tradeform"><span class="glyphicon glyphicon-plus"><i class="fa fa-plus" aria-hidden="true"></i></span></Link></h2>

                    </div>

                    <div className="card-body">
                        <table className="table table-hover table-sm-col-md-8">
                            <th scope="col">Commodity</th>
                            <th scope="col">Side</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Counterparty</th>
                            <th scope="col">Location</th>
                            <tbody>
                                {/* <TradeData /> */}
                                {/*{this.renderTradeList} */}
                                <Query
                                    query={gql`
                                {
                                    trades{
                                        idd
                                        commodity
                                        side
                                        quantity
                                        price
                                        counterparty
                                        location
                                    }
                                }
                                `}
                                >
                                    {({ loading, error, data }) => {
                                        if (loading) return <p>Loading...</p>;
                                        if (error) return <p>Error :(</p>;

                                        return data.trades.map((trade) => {
                                            return (
                                                <tr key={trade.idd}>
                                                    <td>{trade.commodity}</td>
                                                    <td>{trade.side}</td>
                                                    <td>{trade.quantity}</td>
                                                    <td>{trade.price}</td>
                                                    <td>{trade.counterparty}</td>
                                                    <td>{trade.location}</td>
                                                    {/* <td><Link to={`edit - trade / ${ trade.idd } /${trade.commodity}/${ trade.side } /${trade.quantity}/${ trade.price } /${trade.counterparty}/${ trade.location } `}><i className="fa fa-edit"></i></Link></td> */}
                                                    <td><a href="#" onClick={() => { this.deleteItem(trade.idd) }}><i className="fa fa-trash"></i></a></td>
                                                </tr>
                                            );
                                        });
                                    }}
                                </Query>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default TradeList;