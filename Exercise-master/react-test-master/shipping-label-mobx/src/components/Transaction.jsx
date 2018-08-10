import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@inject('store')
@observer
class Transaction extends Component {

    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleTransactionQuantity = this.handleTransactionQuantity.bind(this);
        this.handleTransactionPrice = this.handleTransactionPrice.bind(this);
    }
    handleNext(e) {
        e.preventDefault();
        var transactionDetails = this.props.store.details.transaction;
        console.log("New details submitted", transactionDetails);
        this.props.store.handleType('transaction');
        this.props.history.push(this.props.store.details.next);
    }

    handlePrevious(e) {
        e.preventDefault();
        var transactionDetails = this.props.store.details.transaction;
        console.log("New details submitted", transactionDetails);
        this.props.store.handleType('transaction');
        this.props.history.push(this.props.store.details.previous);
    }

    handleTransactionPrice(e) {
        this.props.store.handlePrice(e.target.value);
    }

    handleTransactionQuantity(e) {
        this.props.store.handleQuantity(e.target.value);
    }

    render() {
        const style = {
            width: '80%'
        };
        const isEnabled = (this.props.store.details.sender.name).length > 0 && (this.props.store.details.sender.city).length > 0;
        return (
            <div>
                <h1 className="heading">Transaction's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={this.props.store.details.transaction.price} className="form-control" onChange={this.handleTransactionPrice} />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input value={this.props.store.details.transaction.quantity} className="form-control" onChange={this.handleTransactionQuantity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-default" onClick={this.handlePrevious} disabled={!isEnabled}>Previous</button>
                                        <button className="btn btn-primary" onClick={this.handleNext} disabled={!isEnabled}>Next</button>
                                        <button className="btn btn-danger" onClick={this.handleClear} disabled={!isEnabled}>Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={style}>4</div>
                </div>
                <DevTools/>
            </div>
        );
    }
}

export default Transaction;