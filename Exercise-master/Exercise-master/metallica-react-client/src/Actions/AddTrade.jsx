// import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag'

// export const AddTrade = gql`
//             mutation addTrade($trade:Trade!) {
//                         addChannel(trade: $trade) {
//                                                         idd
//                                                         commodity
//                                                         side
//                                                         quantity
//                                                         price
//                                                         counterparty
//                                                         location
//                                                 }
//   }
// `;


// class AddTrade extends Component {
//     render() {
//         const CreateChannel = ({mutate}) => {
//             const handleKeyUp = (evt) => {
//               if (evt.keyCode === 13) {
//                 evt.persist();
//                 mutate({
//                   variables: { name: evt.target.value }
//                 })
//                 .then( res => {
//                   evt.target.value = '';
//                 });
//               }
//           };
//     }
// }

// export default graphql(TRADE_LIST)(AddTrade);