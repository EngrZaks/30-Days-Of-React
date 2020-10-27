// index.js
import React from 'react'
import ReactDOM from 'react-dom'

let winterurl = 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=10'




let summerurl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=10'
let springurl = 'https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=10'
let fallurl = 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=10'
let morningUrl = 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=10'
let noonUrl = 'https://images.unsplash.com/photo-1590253230459-57b62ab9081a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=10'
let eveningUrl = 'https://images.unsplash.com/photo-1533907650686-70576141c030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=10'
let nightUrl = 'https://images.unsplash.com/photo-1437751059337-ea72d4f73fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=742&q=10'
function seasonUrl(month) {
    switch(month) {
        case '12':
        case '1':
        case '2':
            return winterurl
        break;
        case '3':
        case '4':
        case '5':
            return springurl
        break;
        case '6':
        case '7':
        case '8':
            return summerurl
        break;
        case '9':
        case '10': 
        case '11':
            return fallurl
        break;
    }
}
function dayUrl(time) {
 switch (time) {
   case'0':case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9': case'10':case'11':
     return morningUrl
     break;
  case '12':case'13':case'14':case'15':
    return noonUrl
     break;
  case '16':case'17':case'18':case'19':
    return eveningUrl
    break
  case '20': case'21':case'22':case'23':
  return nightUrl; break
 }
}
// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)
const Login =   () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
      backgroundMode,
      BackgroundText
    } = this.props
    console.log(message)

    const status = loggedIn ? <Welcome /> : <Login />
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            /> {' '}
            <Button
              text= {BackgroundText}
              onClick={backgroundMode}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb80',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {

  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
    urlIsDay: true,
    backgroundName: 'Season Background'
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
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
    return `${month} ${date}, ${year}`
  }
  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }
  changeBackgroundMode = ()=>{
    this.setState({urlIsDay: !this.state.urlIsDay})
    this.setState({backgroundName: this.state.backgroundName === 'Season Background' ? 'Day Background' : 'Season Background'})
  }
  url = ()=>{
    const month = `${(new Date).getMonth()}`
    const time = `${(new Date).getHours()}`
    const url1 = `url(${dayUrl(time)})` 
    const url2 = `url(${seasonUrl(month)})`
    return this.state.urlIsDay ? url1 : url2
  }
  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    
    
    
    return (
      <div className='app' style={{background:this.url(), backgroundSize:'cover', backgroundRepeat: 'no-repeat', color:'white'}}>
        <Header data={data} />
        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
          backgroundMode={this.changeBackgroundMode}
          BackgroundText={this.state.backgroundName}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
