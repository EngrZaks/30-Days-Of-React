// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import {countriesData} from './data/countries'


const languageSpeakers = ()=>{
  let eng=0, arab=0, french=0, port=0, german=0, ita=0
  for (let index = 0; index < countriesData.length; index++) {
    const element = countriesData[index];
    if (element.languages.includes('English')) eng++  
    if (element.languages.includes('Arabic')) arab++  
    if (element.languages.includes('French')) french++  
    if (element.languages.includes('Portuguese')) port++  
    if (element.languages.includes('German')) german++  
    if (element.languages.includes('Italian')) ita++  
  }
  return `English speaking Countries: ${eng}, Arabic speaking Countries: ${arab}, French speaking Countries: ${french}, Portuguese speaking Countries: ${port}, German speaking Countries: ${german}, Italian speaking Countries: ${ita}`
}
console.log(languageSpeakers())



// Fuction to show month date year

// User Card Component
// const UserCard = ({ user: { firstName, lastName, image } }) => (
//   <div className='user-card'>
//     <img src={image} alt={firstName} />
//     <h2>
//       {firstName}
//       {lastName}
//     </h2>
//   </div>
// )
class UserCard extends React.Component{
  render(){
    const{firstName, lastName, image} =this.props.user
    return(
      <div className='user-card'>
     <img src={image} alt={firstName} />
     <h2>
       {firstName}
       {lastName}
     </h2>
   </div>
    )
  }
}

// A button component
// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// )
class Button extends React.Component{
  render(){
    const{text, onClick, style} = this.props
    return <button style={style} onClick={onClick}>{text}</button>
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component ..header
 class Header extends React.Component{
   constructor(props){
     super(props)
   }
   render(){
     const{welcome, title, subtitle, author:{firstName, lastName}, date} = this.props.data
     return (
       <header>
         <div className='header-wrapper'>
           <h1>{welcome}</h1>
           <h2>{title}</h2>
           <h3>{subtitle}</h3>
           <p>{firstName} {lastName}</p>
           <small>{date}</small>
         </div>
       </header>
     )
   }
 }

// TechList Component
// class base component
class TechList extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    const {techs} = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted 
  }

}
// Main Component
// Class Component
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='main-wrapper'>
        <h2>Prerequisite to getting started React</h2>
        <ul><TechList techs={this.props.techs}/></ul>
        <UserCard user={this.props.user}/>
        <Button text='Great People' onClick={this.props.greatPeople} style={buttonStyles}/>
        <Button text='Show Time' onClick={this.props.showTime} style={buttonStyles}/>
      </div>
    )
  }
} 
// Footer Component
// Class component


class App extends React.Component {
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
 render(){
   const data ={
     welcome: 'Welcome to 30 Days of React', 
     title:'Getting Started React', subtitle:'JavaScript Library', 
     author:{firstName:'Asabeneh', lastName:'Yetayeh'}, date: this.showDate(new Date)
   }
   const user ={...data.author, image:asabenehImage}
   const techs = ['HTML', 'CSS', 'JavaScript']
   return (
     <div className='app'>
       <Header data={data}/>
       <Main techs={techs} user={user} greatPeople={this.greetPeople} showTime={this.handleTime}/>
     </div>
   )
 }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
