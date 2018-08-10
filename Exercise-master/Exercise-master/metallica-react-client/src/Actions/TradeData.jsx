import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

export const TRADE_LIST = gql`
            query {
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
`

class TradeData extends Component {
    render() {
        if (this.props.data && this.props.data.loading)
            return <div>Loading</div>;

        else if (this.props.data && this.props.data.error)
            return <div>Error</div>;

        else {
            return this.props.data.trades.map((trade) => {
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
        }
    }
}

export default graphql(TRADE_LIST)(TradeData);