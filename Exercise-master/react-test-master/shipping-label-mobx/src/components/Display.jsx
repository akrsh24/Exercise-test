import React, { Component } from 'react';
import '../css/Display.css'
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@inject('store')
@observer

class Display extends Component {
    constructor(props) {
        super(props);
        this.handleLast=this.handleLast.bind(this);
        this.handlePrevious=this.handlePrevious.bind(this);
    }
    handleLast(e) {
        e.preventDefault();
        this.props.store.details = {
            sender: {
                name: '',
                city: ''
            },
            receiver: {
                name: '',
                city: ''
            },
            transaction: {
                price: '',
                quantity: ''
            },
            next: '',
            previous: ''
        }
        this.props.history.push('/');
    }

    handlePrevious(e) {
        e.preventDefault();
        this.props.history.push('/transaction');
    }

    render() {
        const style = {
            width: '100%'
        };
        console.log(this.props.store.details);
        return (
            <div>
                <div className="jumbotron" id="start">
                    <h1 className="display-4" id="heading">Shipping Label Generator</h1>
                    <div id="displays">
                        <div>
                            <p><strong>Sender's Name: {this.props.store.details.sender.name}</strong></p>
                            <p><strong>Sender's City: {this.props.store.details.sender.city}</strong></p>
                            <p><strong>Receiver's Name: {this.props.store.details.receiver.name}</strong></p>
                            <p><strong>Receiver's City: {this.props.store.details.receiver.city}</strong></p>
                            <p><strong>Price: {this.props.store.details.transaction.price}</strong></p>
                            <p><strong>Quantity: {this.props.store.details.transaction.quantity}</strong></p>
                        </div >
                    </div>
                    <div className="btn-group btn-group-sm" id="btn-2">
                        <button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button>
                        <button className="btn btn-default" onClick={this.handleLast}>Next</button>
                    </div>
                    <hr className="my-4" />
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >5</div>
                    </div>
                </div>
                <DevTools/>
            </div>
        );
    }
}


export default Display;