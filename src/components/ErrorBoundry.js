import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){ // This is a react version of try and catch error
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) { // If there is an error/hasError=True 
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;