import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    render() {
        const style = {
            width: '25%'
        };
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h1>Shipping Generator Exercise</h1>
                        <p class="lead">Application that manages Shipping Information</p>
                        <ul>
                            <li>Add new Details - click add details to add a new user</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={style} >1</div>
                </div>
            </div>
        );
    }
}

export default Home;