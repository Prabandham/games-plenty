import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class GamePage extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Link to="/home">Home</Link>
                <h1 className="text-success">This is another page, where we can actually play the game</h1>
            </div>
        )
    }
}