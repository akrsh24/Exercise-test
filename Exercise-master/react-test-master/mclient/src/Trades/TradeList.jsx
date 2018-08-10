import React, { Component } from 'react';
import gql from 'graphql-tag'
import {
    Link
} from 'react-router-dom'
import TradeData from '../actions/TradeData';

class TradeList extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">

                    <h2> Trade<Link className="btn btn float-right btn-round" to="/tradeform"><span className="glyphicon glyphicon-plus"><i className="fa fa-plus" aria-hidden="true"></i></span></Link></h2>

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
                            <TradeData />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TradeList;
