import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('store')
@observer
class ReceiverForm extends Component {

    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleReceiverName = this.handleReceiverName.bind(this);
        this.handleReceiverCity = this.handleReceiverCity.bind(this);
    }
    handleNext(e) {
        e.preventDefault();
        var receiverDetails = this.props.store.details.receiver;
        console.log("New details submitted", receiverDetails);
        this.props.store.handleType('receiver');
        this.props.history.push(this.props.store.details.next);
    }

    handlePrevious(e) {
        e.preventDefault();
        var receiverDetails = this.props.store.details.receiver;
        console.log("New details submitted", receiverDetails);
        this.props.store.handleType('receiver');
        this.props.history.push(this.props.store.details.previous);
    }

    handleReceiverName(e) {
        this.props.store.handleName('receiver', e.target.value);
    }

    handleReceiverCity(e) {
        this.props.store.handleCity('receiver', e.target.value);
    }

    render() {
        const style = {
            width: '40%'
        };
        const isEnabled = (this.props.store.details.receiver.name).length > 0 && (this.props.store.details.receiver.city).length > 0
        return (
            <div>
                <h1 className="heading">Receiver's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={this.props.store.details.receiver.name} className="form-control" onChange={this.handleReceiverName} required />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.props.store.details.receiver.city} className="form-control" onChange={this.handleReceiverCity} required />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-default" onClick={this.handlePrevious} disabled={!isEnabled}>Previous</button>
                                        <button className="btn btn-primary" onClick={this.handleNext} disabled={!isEnabled}>Next</button>
                                        <button className="btn btn-danger" onClick={(e) => this.props.store.handleClear('receiver', e)} disabled={!isEnabled}>Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style}>2</div>
                </div>
                <DevTools />
            </div>
        );
    }
}

export default ReceiverForm;