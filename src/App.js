import React from 'react';
import SingleInput from './components/SingleInput'
import Display from './components/Display';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PersonalInformationSection from './components/DisplaySections/PersonalInformation'
import WorkExperienceSection from './components/DisplaySections/WorkExperience';
import WorkInput from './components/WorkInput';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputs: {
        personal: {
          firstName: { id: 'firstName', type: 'text', value: '', inSection: 'personal' },
          lastName: { id: 'lastName', type: 'text', value: '', inSection: 'personal' },
          birthDate: { id: 'birthDate', type: 'date', value: '', inSection: 'personal' },
          email: { id: 'email', type: 'email', value: '', inSection: 'personal' },
          personalWebsite: { id: 'personalWebsite', type: 'url', value: '', inSection: 'personal' },
        },
        workExperience: {
          1: { id: 1, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', startDate: '', endDate: '' },
          2: { id: 2, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', startDate: '', endDate: '' },

        }

  }
    };

    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(newValue, id, inSection, subPart) {
    if (subPart === undefined) {  // if subPart is empty then we treat it as flat object
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup[id]
      item.value = newValue;
      this.setState({ inputs });
    } else {    // currently different data structure only occurs in workExperience so we have to add localization by subPart
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup[id]
      item[subPart] = newValue;
      this.setState({ inputs });
    }
  }

  render() {
    const { inputs } = this.state
    return (
      <Container className='mt-5'>
        <Row className='d-flex justify-content-around'>
          <Col>
            <Row>
              <h4 className = 'text-center'>Personal information</h4>
              {Object.values(inputs.personal).map(input => <SingleInput {...input} handleInput={this.handleInput} />)}
            </Row>
            <Row>
              <h4 className='text-center'>Work experience</h4>
              {Object.values(inputs.workExperience).map(input => <WorkInput {...input} handleInput={this.handleInput} />)}
            </Row>
          </Col>
          <Col className='align-content-center'>
            <Row as={Card} style={{height: '877px', width: '620px', margin: '0 auto', scale: '100vw'}}>
              <Col className='p-0'><PersonalInformationSection {...inputs.personal} /></Col>
              <Col><WorkExperienceSection {...inputs.workExperience} /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    )
  }
}

// <Col>{Object.keys(inputsCategories).map(category => {inputsCategories[category].map(input => console.log(<Display {...input} />))})}</Col>

