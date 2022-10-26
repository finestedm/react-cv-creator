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
        personal: [
          { id: 'firstName', description: 'First name', type: 'text', value: '', inSection: 'personal' },
          { id: 'lastName',  description: 'Last name', type: 'text', value: '', inSection: 'personal' },
          { id: 'phone',  description: 'Telephone number', type: 'tel', value: '', inSection: 'personal' },
          { id: 'email',  description: 'E-mail address', type: 'email', value: '', inSection: 'personal' },
          { id: 'personalWebsite',  description: 'Your website URL', type: 'url', value: '', inSection: 'personal' },
          { id: 'aboutSelf', description: 'Write something about yourself', type: 'textarea', value: '', inSection: 'personal' },
        ],
        workExperience: [
          { id: 1, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', description: ''},
          { id: 2, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', description: ''},
        ],
        photo: null
  }
    };
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
    this.handleNewJob = this.handleNewJob.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  handlePhotoUpload(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    })
  }

  handleNewJob() {
    let inputs = { ...this.state.inputs };
    let workExperienceObjects = inputs['workExperience'];
    let numberOfJObs = Object.keys(workExperienceObjects).length
    let newJobNumber = numberOfJObs + 1
    let newJob = { id: newJobNumber, type: 'text', value: '', inSection: 'workExperience', startDate: '', endDate: '', description: ''}
    console.log(newJob)
    workExperienceObjects.push(newJob) 
    console.log(workExperienceObjects)
      // let inputGroup = inputs[inSection]
      // let item = inputGroup[id]
      // item[subPart] = newValue;
      this.setState({ inputs });
  }

  handleInput(newValue, searchedId, inSection, subPart) {
    if (subPart === undefined) {  // if subPart is empty then we treat it as flat object
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup.filter(input => (input.id === searchedId))[0]
      item.value = newValue;
      this.setState({ inputs });
    } else {    // currently different data structure only occurs in workExperience so we have to add localization by subPart
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup.filter(input => (input.id === searchedId))[0]
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
              <Button variant='outline-secondary' onClick={this.handleNewJob}>Add another job</Button>
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

