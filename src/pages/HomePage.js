import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from "mobx-react";

@observer 
export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: this.props.store,
            itemValue: '',
        }
    }

    updateInputValue = (evt) => {
        this.setState({
            itemValue: evt.target.value,
        })
    }

    addToList = () => {
        let value = this.state.itemValue
        this.state.store.addToList(value)
        this.setState({
            itemValue: ''
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <Link to="/game">Game</Link>
                <div className='row'>
                    <h4 className='text-warning'>The list has { this.state.store.count_list } elements</h4>
                </div>
                <div className="row">
                    <ul>
                        {
                            this.state.store.get_list.map(function(item, i) {
                                return <li key={i}>{item}</li>
                            })
                        }
                    </ul>
                    <hr />
                    <br />
                </div>
                <div className='row'>
                    <input name="item" value={this.state.itemValue} onChange={evt => this.updateInputValue(evt)}/>
                    <button className='btn btn-success' onClick={this.addToList}>Add</button>
                </div>
            </div>
        )
    }
}