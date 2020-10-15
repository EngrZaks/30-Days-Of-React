import React from 'react'
import ReactDom from 'react-dom'
import asabenaImage from './images/asabeneh.jpg'
import cssImage from './images/css_logo.png'
import HTMLImage from './images/html_logo.png'
import jsImage from './images/js_logo.png'
import reactImage from './images/react_logo.png'

const showDate = (time) => {
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

const hexColor = ()=>{
let hexRange = '0123456789abcdef'
let color = ''
for (let index = 0; index < 6; index++) {
  const i = Math.floor(Math.random()*hexRange.length)
  color += hexRange[i]
}
return '#' + color
}
console.log(hexColor())

// Header Component
const Header = ({data:{welcome, title, subtitle, author:{firstName, lastName}, date}}) => {
  // const driveStatus = props.status ? 'Old enough to drive' : 'Too young to drive'
return (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{firstName} {lastName}</p>
      <small>{showDate(date)}</small>
      {/* <p>{driveStatus}</p> */}
    </div>
  </header>
)
} 
//skills component
const Skills = ({Skills}) => Skills.map((skill)=> <li key={skill}>{skill}</li>)

//user card component
const UserCard = ({user:{firstName, lastName, imageSource}})=>{
  return (
    <div className='user-card'>
      <img src={imageSource}></img>
      <h2>{firstName} {lastName}</h2>
    </div>
  )
}

// button component
const Button = ({text, onClick, buttonStyle})=> <button onClick={onClick} style={buttonStyle}>{text}</button>

//EXERCISES
//exercise one component
const One = ({html, css, JavaScript, react})=>(
  <div className='one'>
    <h3>Front End Technologies</h3>
    <div className='tech-wrapper'>
      <img src = {html} alt='html Logo'/>
      <img src = {css} alt='css Logo'/>
      <img src = {JavaScript} alt='JavaScript Logo'/>
      <img src = {react} alt='React Logo'/>
    </div>
  </div>
)
//exercise two component
const Two =({twoData:{image, name: {firstName, lastName}, title, skills, joined}}) =>(
  <div className='two' >
    <div className='two-wrapper'>
      <img src={image} alt='developer Image'/>
      <h2>{firstName} {lastName} ✔</h2>
      <p>{title}</p>
      <h2>SKILLS</h2>
      <ul>{skills}</ul>
      <small>⏲ {joined}</small>
    </div>
  </div>
)
//exercise three component 
const Three = ({three_data:{signup, fn, ln, em, btnText, btnStyle}})=>(
  <div className='three'>
    <div className='three-wrapper'>
      <h2>SUBSCRIBE</h2>
      <h3>{signup}</h3>
      <form>
        <input type='text' placeholder={fn}/>
        <input type='text' placeholder={ln}/>
        <input type='text' placeholder={em}/>
      </form>
      <Button text={btnText} buttonStyle={btnStyle}/>
    </div>
  </div>
)
//Exercise Four component
const Four = ({fourData:{text, styles}})=>(
  <div style={styles}>{text}</div>
)
//Exercise Component
const Excercise = ({two, three, four, four1, four2, four3, four4})=>{
  return (
    <div style={{marginTop:'20px'}}>
      <h1>Day 05 Exercises</h1>
      <One html={HTMLImage} css={cssImage} JavaScript={jsImage} react={reactImage}/>
      <Two twoData={two}/>
      <Three three_data={three}/>
      <Four fourData={four}/>
      <Four fourData={four1}/>
      <Four fourData={four2}/>
      <Four fourData={four3}/>
      <Four fourData={four4}/>
    </div>
  )
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

//Main Component
const Main = ({usercard, skillList, greetPeople, handleTime, two, three, four, four1, four2, four3, four4})=>(
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to getting started with React.js:</p>
      <ul>
         <Skills Skills={skillList}/>
      </ul>
      <UserCard user={usercard}/>
      <Button text='Greet People' style={buttonStyles} onClick={greetPeople}/> 
      <Button text='Show time' style={buttonStyles} onClick={handleTime}/> 
      <Excercise two={two} three={three} four={four} four1={four1} four2={four2} four3={four3} four4={four4} />
    </div>
  </main>
)
//Footer Component
const Footer = ({copyright})=> (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyright.getFullYear()}</p>
    </div>
  </footer>
)

//the App or Container component
const App = ()=>{
  const data = {
     welcome : 'Welcome to 30 Days Of React',
     title : 'Getting Started React',
     subtitle : 'JavaScript Library', 
     author : {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
    date : new Date()
  }
  let skills = ['HTML', 'CSS', 'JS', 'Node']
  let skillList = skills.map((skil)=> <li>{skil}</li>)
  const greetPeople = ()=>{alert('Welcome to 30 Days Of React Challenge, 2020')}
  const handleTime = ()=> alert(showDate(data.date))
  const user = {...data.author, imageSource: asabenaImage}
  const two_skills = [skills, 'Sass', 'Redux', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GrpQL', 'D3.Js', 'Gatsby', 'Docker', 'Heroku', 'Git']
  const dataForTwo = {
    image: asabenaImage,
    name: {...data.author},
    title: 'Senior Developer, Finland',
    skills: two_skills.map((skill)=> <li key={skill}>{skill}</li>),
    joined: 'Joined on Aug 30, 2020'
  }
  const three_data = {
    signup: 'Signup with your email address to recive news and updates', 
    fn: 'First Name', ln: 'Last Name', em: 'Email', btnText: 'Subscribe', 
    btnStyle:{background: 'red', color: 'white', padding: '5px', width: '23%', borderRadius: '5px', border: 'none'}}
    const color= hexColor()
    const color1= hexColor()
    const color2= hexColor()
    const color3= hexColor()
    const color4= hexColor()
    const four_data = {text: color, styles: {width:'100%', padding:'10px', background:color, fontWeight:'bolder', textAlign:'center', fontSize:'20px', margin: '2px 0'} }
    const four_data1 = {text: color1, styles: {width:'100%', padding:'10px', background:color1, fontWeight:'bolder', textAlign:'center', fontSize:'20px', margin: '2px 0'} }
    const four_data2 = {text: color2, styles: {width:'100%', padding:'10px', background:color2, fontWeight:'bolder', textAlign:'center', fontSize:'20px', margin: '2px 0'} }
    const four_data3 = {text: color3, styles: {width:'100%', padding:'10px', background:color3, fontWeight:'bolder', textAlign:'center', fontSize:'20px', margin: '2px 0'} }
    const four_data4 = {text: color4, styles: {width:'100%', padding:'10px', background:color4, fontWeight:'bolder', textAlign:'center', fontSize:'20px', margin: '2px 0'} }

  return(
  <div className = 'app'>
    <Header data = {data}/>
    <Main usercard={user} skillList={skillList} greetPeople={greetPeople} handleTime={handleTime} two={dataForTwo} three={three_data} four={four_data} four1={four_data1} four2={four_data2} four3={four_data3} four4={four_data4}/>
    <Footer copyright={data.date}/>
    </div>
)
}

const root = document.getElementById('root')
ReactDom.render(<App/>, root) 