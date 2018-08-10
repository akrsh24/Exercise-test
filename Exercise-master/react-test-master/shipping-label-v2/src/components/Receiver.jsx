import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import store from '../Store/Store';
import {
    Link
} from 'react-router-dom'

class Receiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: ''
        }
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    handleNext(e) {
        e.preventDefault();
        var newDetails = {
            name: this.state.name,
            city: this.state.city
        }
        console.log("Next button");
        store.setState('receiver', newDetails);
    }

    handlePrevious(e) {
        e.preventDefault();
        var newDetails = {
            name: this.state.name,
            city: this.state.city
        }
        console.log("Previous button");
        store.setState('receiver', newDetails);
    }

    render() {
        const style = {
            width: '50%'
        };
        return (
            <div>
                <h1>Receiver's Details</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={this.state.name} className="form-control" onChange={this.handleName} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input value={this.state.city} className="form-control" onChange={this.handleCity} />
                                    </div>
                                    <div className="btn-group btn-group-sm" id="btn-1">
                                        <Link to="/sender"><button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button></Link>
                                        <Link to="/"><button className="btn btn-default" onClick={this.handleNext}>Next</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={style}>2</div>
                </div>
            </div >
        );
    }
}

export default Receiver;