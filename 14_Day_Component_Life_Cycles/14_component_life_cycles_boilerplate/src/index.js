import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Country from '../../../10_React_Project_Folder_Structure/10_react_project_folder_structure_boilerplate/src/components/country/Country'

const Name = ({firstName})=> <h1>{firstName}</h1>

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'Zakariyya',
      data: [],
      day: 0,
      congratulate: ''
    }
  } 
  // static getDerivedStateFromProps(props, state){
  //   console.log('I am getDerivedStateFromProps and i will be the second to run')
  //   return {firstName: props.firstName}
  // }
  componentDidMount(){
    console.log('I am comoonentdidmount and i will be the last to run')
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL).then(respons => respons.json()).then((data)=>{
      // console.table(data)
      this.setState({data})
    }).catch(error => console.error(error))
    setTimeout(() => {
      this.setState({firstName: 'Abdullahi'})
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState){
    // if the return from this method is false, the application will never update.
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 6) {
      return false
    }else return true
  }
  componentDidUpdate(prevProps, prevState){
    console.log('%c component has been updated', 'font-size:30px')
    if (prevState.day == 5) {
      this.setState({congratulate: 'Congratulation, Final Day'})
    } else {
      
    }
  }
  increaseDay =()=>{
    this.setState({day: this.state.day + 1})
  }
  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>The constructor is the first to Run</h2>
        <p>Author:{this.state.firstName}</p>
        <Name firstName={this.state.firstName} />
        <button onClick={this.increaseDay}>increaseDay</button>
        <h1>{this.state.day}</h1>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
        <p>we have {this.state.data.length} cpuntries in our countries database</p>
        <div className='countries-wrapper'>
          {this.state.data.map(country => <div style={{margin:'12px auto', padding:'10px', border:'1px solid #e3e3e3',width:'50%',textAlign:'center'}}>
            <div>
              <img src={country.flag} alt={country.name} width='25%' /> 
             </div>
             <div>
               <h2 style={{fontWeight:'bolder'}}>{country.name}</h2>
               <h2>Capital: {country.capital}</h2>
               <h3>Population: {country.population}</h3>
             </div>
          </div>) }
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)