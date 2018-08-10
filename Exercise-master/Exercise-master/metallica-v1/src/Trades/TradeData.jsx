import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const renderTradeList = () => (

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
);

export default renderTradeList;