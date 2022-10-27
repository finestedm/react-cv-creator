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
import EducationInput from './components/EducationInput';
import Education from './components/DisplaySections/Education';


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
        ],
        education: [
          { id: 1, type: 'text', value: '', inSection: 'education', endDate: '', profile: '', achievements: ''},
        ],
        photo: null
  }
    };
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
    this.addNewEntry = this.addNewEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  };

  componentDidMount() {
    const data = JSON.parse(window.localStorage.getItem('data'))
    if (this.state.inputs !== data) {
      this.setState({inputs: JSON.parse(window.localStorage.getItem('data'))})
    } else {
    }
  }

  saveLocalStorage() {  
    localStorage.setItem('data', JSON.stringify(this.state.inputs))
  }
  
  handlePhotoUpload(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    })
    this.saveLocalStorage();
  }

  addNewEntry(inSection) {
    let inputs = { ...this.state.inputs };
    let searchedSectionObjects = inputs[inSection];
    let numberOfEntries = Object.keys(searchedSectionObjects).length
    let numberOfNewEntry = numberOfEntries + 1
    let newEntry = { id: numberOfNewEntry, type: 'text', value: '', inSection: inSection, startDate: '', endDate: '', description: ''}
    searchedSectionObjects.push(newEntry) 
    this.setState({ inputs });
    this.saveLocalStorage();
  }

  deleteEntry(searchedId, inSection) {
    let inputs = { ...this.state.inputs };
    let searchedSectionObjects = inputs[inSection];
    let searchedSectionObjectsWithDeletedJob = searchedSectionObjects.filter(entry => (entry.id !== searchedId))
    inputs[inSection] = searchedSectionObjectsWithDeletedJob
    this.setState({ inputs });
    this.saveLocalStorage();
  }

  handleInput(newValue, searchedId, inSection, subPart) {
    if (subPart === undefined) {  // if subPart is empty then we treat it as flat object
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup.filter(input => (input.id === searchedId))[0]
      item.value = newValue;
      this.setState({ inputs });
      this.saveLocalStorage();
    } else {    // currently different data structure only occurs in workExperience so we have to add localization by subPart
      let inputs = { ...this.state.inputs };
      let inputGroup = inputs[inSection]
      let item = inputGroup.filter(input => (input.id === searchedId))[0]
      item[subPart] = newValue;
      this.setState({ inputs });
      this.saveLocalStorage();
    }
  }

  render() {
    const { inputs, photo } = this.state
    return (
      <>
      <nav className="navbar navbar-light bg-light sticky-top">
          <span className="navbar-brand mb-0 p-3 h1">CV Creator</span>
          <a href='https://github.com/finestedm'>
            <span className="navbar-brand mb-0 p-3">Created by Paweł Stępień
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 20 20">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </span>
          </a>
      </nav>
      <Container fluid="md" className='mt-5'>
        <Row className='main d-flex justify-content-around gap-5'>
          <Col>
            <Row className='mb-4'>
              <h4 className='p-0'>Personal information</h4>
              {Object.values(inputs.personal).map(input => <SingleInput {...input} handleInput={this.handleInput} />)}
              <ImageInput handlePhotoUpload={this.handlePhotoUpload} />
            </Row>
            <Row className='mb-4'>
              <h4 className='p-0'>Education</h4>
              {Object.values(inputs.education).map(input => <EducationInput {...input} handleInput={this.handleInput} deleteEntry={this.deleteEntry} />)}
              <Button variant='outline-secondary' onClick={() => this.addNewEntry('education')}>+ Add another education entry</Button>
            </Row>
            <Row className='mb-4'>
              <h4 className='p-0'>Work experience</h4>
              {Object.values(inputs.workExperience).map(input => <WorkInput {...input} handleInput={this.handleInput} deleteEntry={this.deleteEntry} />)}
              <Button variant='outline-secondary' onClick={() => this.addNewEntry('workExperience')}>+ Add another job</Button>
            </Row>
          </Col>
          <Col>
            <Row as={Card} style={{height: '877px', width: '620px', margin: '0 auto'}}>
              <Col><PersonalInformationSection {...inputs.personal} photo={photo} /></Col>
              <Col><Education {...inputs.education} /></Col>
              <Col><WorkExperienceSection {...inputs.workExperience} /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}
