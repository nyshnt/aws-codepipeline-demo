import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    handleOnclick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleOnclicktwo = () => {
        this.setState({ count: this.state.count + 2 })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleOnclick}>Count : {this.state.count}</button>
                <button onClick={this.handleOnclicktwo}>Increment 2</button>
            </div>
        )
    }
}

export default Counter;