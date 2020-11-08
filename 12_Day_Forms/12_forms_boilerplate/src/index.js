import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var validator = require('validator');
// console.log(!validator.isEmail('abzakariyya@gmail.com'))
const options = [
  {
    value: '-- Select Country--',
  },
  {
    value: 'Nigeria',
  },
  {
    value: 'Sweden',
  },
  {
    value: 'Norway',
  },
  {
    value: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}> {value}</option>
))

class App extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,  lastName: false, email: false,  country: false, tel: false,    dateOfBirth: false, favoriteColor: false, weight: false,  gender: false,    file: false,    bio: false,  skills: {
        html: false,      css: false,      javascript: false,
     },
    },
  }
  handleChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    We can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
    console.log('STATE CHANGED')
  }
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',    lastName: '',    email: '',    country: '',    tel: '',
      dateOfBirth: '',    favoriteColor: '',    weight: '',    gender: '',    file: '',  bio: '',
    }
    if ((this.state.touched.firstName && !validator.isLength(this.state.firstName, {min:3,max:12}))) {
      errors.firstName = 'First name must be between 2 and 12'
    }
    if ((this.state.touched.lastName && !validator.isLength(this.state.lastName, {min:3,max:12}))) {
      errors.lastName = 'Last name must be between 2 and 12'
    }
     if (this.state.touched.email && !validator.isEmail(this.state.email)) {
      errors.email = 'the Email field must be an email'
    }
     if ((this.state.touched.tel && !validator.isMobilePhone(this.state.tel,'any'))) {
      errors.tel = 'this must be a Nigerian mobile number'
    }
    return errors
  }
  handleSubmit = (e) => {
    /*
      e.preventDefault()
      stops the default behavior of form element 
      specifically refreshing of page
      */
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      // console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    /*
     the is the place where we connect backend api
      to send the data to the database
      */
     const errorMessages = []
     const object = this.validate()
     for (const key in object) {
       if (object[key]) {
         const element = object[key];
         errorMessages.push(element)
        }
      }
       if (errorMessages.length > 0) {
         console.log(errorMessages)
          } else {
               console.table(data)
            }              
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName, lastName, email, tel } = this.validate()
    const errorStyle ={color:'red', fontWeight:'bold'}
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              /> <br />
              <small style={errorStyle}>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                placeholder='Last Name'
              /> <br />
              <small style={errorStyle}>{lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                placeholder='Email'
              /><br />
              <small style={errorStyle}>{email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Tel'
            /> <br />
              <small style={errorStyle}>{tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
               onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} onBlur={this.handleBlur} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
                onBlur={this.handleBlur}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)