import React from 'react';
import SingleInput from './components/SingleInput'
import Display from './components/Display';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputs: [
        { id: 'firstName', type: 'text', value: '' },
        { id: 'lastName', type: 'text', value: '' },
        { id: 'birthDate', type: 'date', value: '' },
        { id: 'email', type: 'email', value: '' },
        { id: 'personalWebsite', type: 'url', value: '' }

      ]
    };

    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(e) {
    let inputs = [...this.state.inputs];
    let item = inputs.filter(input => input.id === e.target.id)[0]
    item.value = e.target.value;
    inputs.concat(...inputs, item);
    this.setState({ inputs });
  }

  render() {
    const { inputs } = this.state
    return (
      <Row>
        <Col>{inputs.map(input => <SingleInput {...input} handleInput={this.handleInput} />)}</Col>
        <Col>{inputs.map(input => <Display {...input} />)}</Col>
      </Row>
    )
  }
}
