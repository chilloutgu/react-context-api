import React, { Component } from 'react';

class Sends extends Component {
    state = {
        input: ''
    };

    componentDidMount() {
        this.setState({
            input: this.props.value
        })
    }

    handleChange = ({ target: { value } }) => {
        this.setState({
            input: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    render() {
        console.log('rendering')
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">전송</button>
            </form>
        )
    }
}

export default Sends;