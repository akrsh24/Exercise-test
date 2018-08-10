import React, { Component } from 'react';
import '../css/Home.css'
/**
 * home page - contains description of the project
 * 
 */
class Home extends Component {
    render() {
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
            </div>
        );
    }
}

export default Home;