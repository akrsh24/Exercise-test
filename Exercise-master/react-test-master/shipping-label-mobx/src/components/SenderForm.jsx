import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/ReceiverForm.css'
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@inject('store')
@observer
class SenderForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleSenderName = this.handleSenderName.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSenderCity = this.handleSenderCity.bind(this);
    }
    handleNext(e) {
        e.preventDefault();
        var senderDetails = this.props.store.details.sender;
        console.log("New details submitted", senderDetails);
        this.props.store.handleType('sender');
        this.props.history.push(this.props.store.details.next);
    }
    handleSenderName(e) {
        this.props.store.handleName('sender',e.target.value);
    }

    handleSenderCity(e) {
        this.props.store.handleCity('sender',e.target.value);
    }
    render() {
        const style = {
            width: '20%'
        };
        const isEnabled = (this.props.store.details.sender.name).length > 0 && (this.props.store.details.sender.city).length > 0

        return (
            <div>
                <h1 className="heading">Sender's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={this.props.store.details.sender.name} className="form-control" onChange={this.handleSenderName} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.props.store.details.sender.city} className="form-control" onChange={this.handleSenderCity} required/>
                                    </div>
                                    <div className="btn-group btn-group-sm" id="button-1">
                                        <button className="btn btn-primary" onClick={this.handleNext} disabled={!isEnabled}>Next</button>
                                        <button className="btn btn-danger" onClick={(e) => this.props.store.handleClear('sender', e)} disabled={!isEnabled}>Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style}>1</div>
                </div>
                <DevTools />
            </div>
        );
    }
}


export default SenderForm;