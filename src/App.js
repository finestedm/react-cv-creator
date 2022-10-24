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
import ImageInput from './components/ImageInput';
import Button from 'react-bootstrap/Button';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputs: {
        personal: {
          firstName: { id: 'firstName', type: 'text', value: '', inSection: 'personal' },
          lastName: { id: 'lastName', type: 'text', value: '', inSection: 'personal' },
          phone: { id: 'phone', type: 'tel', value: '', inSection: 'personal' },
          email: { id: 'email', type: 'email', value: '', inSection: 'personal' },
          personalWebsite: { id: 'personalWebsite', type: 'url', value: '', inSection: 'personal' },
          aboutSelf: { id: 'aboutSelf', type: 'textarea', value: '', inSection: 'personal' },

        },
        workExperience: {
          1: { id: 1, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', description: ''},
          2: { id: 2, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', description: ''},
        },
        photo: null
  }
    };
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
    this.handleInput = this.handleInput.bind(this);
  };

  handlePhotoUpload(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    })
  }

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
    const { inputs, photo } = this.state
    return (
      <Container fluid="md" className='mt-5'>
        <Row className='main d-flex justify-content-around'>
          <Col>
            <Row>
              <h4 className = 'text-center'>Personal information</h4>
              {Object.values(inputs.personal).map(input => <SingleInput {...input} handleInput={this.handleInput} />)}
              <ImageInput handlePhotoUpload={this.handlePhotoUpload} />
            </Row>
            <Row>
              <h4 className='text-center'>Work experience</h4>
              {Object.values(inputs.workExperience).map(input => <WorkInput {...input} handleInput={this.handleInput} />)}
              <Button variant='outline-secondary'>Add another job</Button>
            </Row>
          </Col>
          <Col>
            <Row as={Card} style={{height: '877px', width: '620px', margin: '0 auto'}}>
              <Col><PersonalInformationSection {...inputs.personal} photo={photo} /></Col>
              <Col><WorkExperienceSection {...inputs.workExperience} /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    )
  }
}

// <Col>{Object.keys(inputsCategories).map(category => {inputsCategories[category].map(input => console.log(<Display {...input} />))})}</Col>

