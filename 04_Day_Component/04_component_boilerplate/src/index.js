// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'


const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '100%',
    border: '2px solid black',
    background: bgColor,
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

//EXERCISES
//frontend component
const FrontEnd = ()=>{
  let text = 'Front End Technologies'
  let frontEndStyles = {width: '100%', background: '#e3e3e3', display: 'flex', padding: '10px', margin: '10px 0', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}
  let imageWrapper = {display: 'flex'}
  return (
    <div style = {frontEndStyles}>
      <h3>{text}</h3>
      <div className='image-wrapper' style={imageWrapper}>
        <img src = {htmlLogo} alt='HTML logo'/>
        <img src = {cssLogo} alt='CSS logo'/>
        <img src = {jsLogo} alt='JS logo'/>
        <img src = {reactLogo} alt='React logo'/>
      </div>
    </div>
  )
} 
//cardcomponent
const Card= ()=>{
  // var myname = Header.p
  var name = 'Asabeneh Yetayeh'.toUpperCase()
  var title = 'Senior Developer, Finland'
  const skills = [
     "HTML", "CSS",
     "Sass",
     "JS",
     "React",
     "Redux",
     "Node",
     "MongoDB",
     "Python",
     "Flask",
     "Django",
     "Numpy",
     "Pandas",
     "Data Analysis",
     "MySQL",
     "GrapQL",
     "D3.js",
     "Gaspy",
     "Docker",
     "Heroku",
     "Git",
];
const listStyle = {color:'white', background: ' rgb(82, 214, 214)', padding: '3px', margin: '5px'}
let skillList = skills.map((skill)=> <li style = {listStyle}>{skill}</li>)
const join = '⏲ Joinedon Aug, 30, 2020'
return (
  <div className = 'card' style = {{background: '#e3e3e3', padding: '10px'}}>
    <div style={{background: '#fff', padding: '10px'}}>
      <img src = {asabenehImage} width =' 15%' style={{borderRadius:'50%'}}></img>
      <h2>{name} ✔</h2>
      <small>{title}</small>
      <div>
        <h2>SKILLS</h2>
        <ul style = {{display: 'flex', flexFlow: 'row wrap', margin:'0'}}>  {skillList} </ul>
      </div>
      <small>{join}</small>
    </div>
  </div>
)
}
// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        <h1 style={{marginTop: '20px', color: '#2d79a2',}}>Day 4 Excercises</h1>
        <FrontEnd />
        <Card />
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
