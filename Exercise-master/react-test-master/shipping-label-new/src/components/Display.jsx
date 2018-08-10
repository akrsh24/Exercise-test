import React, { Component } from 'react';

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);

    }
    handleNext(e) {
        e.preventDefault();
        this.props.history.push('/');
    }
    handlePrevious(e) {
        e.preventDefault();
        this.props.history.push('/receiver');
    }

    componentDidMount() {
        this.setState({
            details: this.props.displayInfo
        })
    }

    render() {
        const style = {
            width: '100%'
        };
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Shipping Label Generator</h1>
                    <div id="displays">
                        <div>
                            <p><strong>Sender's Name: {this.state.details.sname}</strong></p>
                            <p><strong>Sender's City: {this.state.details.scity}</strong></p>
                            <p><strong>Receiver's Name: {this.state.details.rname}</strong></p>
                            <p><strong>Receiver's City: {this.state.details.rcity}</strong></p>
                        </div >
                    </div>
                    <div className="btn-group btn-group-sm" id="btn-2">
                        <button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button>
                        <button className="btn btn-default" onClick={this.handleNext}>Next</button>
                    </div>
                    <hr className="my-4" />
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >4</div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Display;