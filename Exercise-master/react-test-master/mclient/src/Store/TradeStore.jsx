import React, { Component } from 'react';

class TradeStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trade: {
                commodity: '',
                side: '',
                counterParty: '',
                price: '',
                quantity: '',
                location: '',
            },
            trades: []
        }
    }

    saveTrade(newTrade) {
        this.setState({
            trade: newTrade
        });
        
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TradeStore;
