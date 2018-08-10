import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const TradeList = ({ data: { loading, error, channels } }) => {

    if (loading) {
        return <p>Loading Data...</p>
    }
    if (error) {
        return <p>Error occured..</p>
    }
    return <ul className="list-group">
        {channels.map(channel => <li className="list-group-item" key={channel.id}>{channel.name}</li>)}
    </ul>
};

const channelsListQuery = gql`
 query ChannelsListQuery{
     channels{
         id 
         name
     }
 }
 `;

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;



