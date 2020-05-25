import React, { Component } from 'react';
import Sends from './Sends';
import { SampleConsumer } from '../contexts/sample';

class SendsContainer extends Component {

    render() {
        return (
            <SampleConsumer>
                {
                    ({ state, actions }) => (
                        <Sends value={state.value} setValue={actions.setValue} />
                    )
                }
            </SampleConsumer>
        )
    }
}

export default SendsContainer;