import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Shipping Label Generator</h1>
                    <div id="displays">
                        <Sender />
                    </div>
                    <div className="btn-group btn-group-sm" id="btn-2">
                        <button className="btn btn-primary" onClick={this.lastPrevious}>Previous</button>
                        <button className="btn btn-default" onClick={this.lastNext}>Next</button>
                    </div>
                    <hr className="my-4" />
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >4</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;