import React from 'react';
import SingleInput from './components/InputSections/SingleInput'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PersonalInformationSection from './components/DisplaySections/PersonalInformation'
import WorkExperienceSection from './components/DisplaySections/WorkExperience';
import WorkInput from './components/InputSections/WorkInput';
import ImageInput from './components/InputSections/ImageInput';
import Button from 'react-bootstrap/Button';
import EducationInput from './components/InputSections/EducationInput';
import Education from './components/DisplaySections/Education';
import SkillInput from './components/InputSections/SkillInput';
import Skills from './components/DisplaySections/Skills';
import Footer from './components/Footer';
import Header from './components/Header';


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
        photo: null,
        skills: [
          { id: 1, value: '', inSection: 'skills', level: ''},
        ]
  }
    };
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
    this.addNewEntry = this.addNewEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  };

  componentDidMount() {
    const savedData = JSON.parse(window.localStorage.getItem('saved-data'))
    if (this.state.inputs !== savedData && savedData !== null) {
      this.setState({inputs: JSON.parse(window.localStorage.getItem('saved-data'))})
    } else {
    }
  }

  saveLocalStorage() {  
    localStorage.setItem('saved-data', JSON.stringify(this.state.inputs))
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
    let newEntry = { id: numberOfNewEntry, inSection: inSection}
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
      <Header />
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
              <Button variant='outline-secondary' className='btn-sm' onClick={() => this.addNewEntry('education')}>+ Add another education entry</Button>
            </Row>
            <Row className='mb-4'>
              <h4 className='p-0'>Work experience</h4>
              {Object.values(inputs.workExperience).map(input => <WorkInput {...input} handleInput={this.handleInput} deleteEntry={this.deleteEntry} />)}
              <Button variant='outline-secondary' className='btn-sm' onClick={() => this.addNewEntry('workExperience')}>+ Add another job</Button>
            </Row>
            <Row className='mb-4'>
              <h4 className='p-0'>Skills</h4>
              {Object.values(inputs.skills).map(input => <SkillInput {...input} handleInput={this.handleInput} deleteEntry={this.deleteEntry} />)}
              <Button variant='outline-secondary' className='btn-sm' onClick={() => this.addNewEntry('skills')}>+ Add another skill</Button>
            </Row>  
          </Col>
          <Col>
            <Row as={Card} style={{height: '877px', width: '620px', margin: '0 auto'}}>
              <Col><PersonalInformationSection {...inputs.personal} photo={photo} /></Col>
              <Col><Education {...inputs.education} /></Col>
              <Col><WorkExperienceSection {...inputs.workExperience} /></Col>
              <Col><Skills {...inputs.skills} /></Col>
            </Row>
          </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}
