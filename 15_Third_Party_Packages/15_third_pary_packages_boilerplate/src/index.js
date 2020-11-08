import React from 'react'
import ReactDom from 'react-dom'
import headerStyles from  './styles/header.module.css'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import {TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialTwitterCircular, TiMail, TiAdjustBrightness} from 'react-icons/ti'
import {SiAFrame, Si1Password, SiActivision, SiPastebin, SiMinutemailer, SiMaas} from 'react-icons/si'
// We can all destructure the class name
const {header, headerWrapper} = headerStyles
const Title = styled.h1 `
color:lime; background: orange; border-radius: 5px; 
font-size:70px;
`
const Icons = styled.div`background:orange`
const Header = () => (
   <header className = {header}>
          <div className={headerWrapper}>
            <Title>
            30 Days Of React

            </Title>
            <h2>Getting Started React</h2>
            <h3 className={headerStyles.lib}>JavaScript Library</h3>
            <p>Instructor: Asabeneh Yetayeh</p>
            <small>Oct 15, 2020</small>
          </div>
         <Icons>

            <TiSocialLinkedinCircular/>
            <TiSocialGithubCircular/>
            <a href='twitter.com' target=''> <TiSocialTwitterCircular/> </a>
            <TiAdjustBrightness/> <SiAFrame/> <SiActivision/> <SiPastebin/> <Si1Password/> <SiMaas/> <TiMail/> <SiMinutemailer/>
         </Icons>
        
        </header>
)
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data: []
    }
  }
  componentDidMount(){
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    axios.get(API_URL).then((response)=>{
      this.setState({data: response.data})
      console.log(response.data[45])
    })
  }
  renderCountries = ()=>{
    return this.state.data.map((country)=>{
      const languageOrLanguages = country.languages.length > 1 ? 'Languages' : 'Language'
      const formattedLanguages = country.languages.map(({name})=> name).join(', ')
      return (
        <div>
          <div>
            <img src={country.flag} alt={country.name} width='40%'/>
          </div>
          <div>
            <h1> {country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>{languageOrLanguages}: {formattedLanguages}</p>
            <p>Population: {country.populatiuon}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='App'>
        <Header/>
        <div>
          <p>this Challange wast started {moment('2020-10-01').fromNow()}</p>
          <p>the Challange will be over {moment('2020-10-30').fromNow()}</p>
          <p>today is {moment(new Date()).format('dd YY MMMM, YYYY HH:MM:SS')}</p>
        </div>
        <h1>Fetching Data Using Axios</h1>
        <p>there are {this.state.data.length} countreis in our countries database</p>
        <div className='countries-wrapper'>{this.renderCountries()}</div>
      </div>
    )
  }
}
const root = document.getElementById('root')
ReactDom.render(<App/>, root)