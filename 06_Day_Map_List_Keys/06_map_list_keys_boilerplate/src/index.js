import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenHighestPopulations } from './data/ten_most_highest_populations'
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]
const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
const numbers = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const hexcolor = ()=>{
  let hex = '0123456789abcdef'
  let hexcolor = ''
  for (let index = 0; index < 6; index++) {
    const element = Math.floor(Math.random()*hex.length)
    hexcolor += hex[element]
  }
  return "#"+ hexcolor
}
console.log(hexcolor())
const colorArrays =()=>{
  let arr = []
  for (let index = 0; index < 32; index++) {
    const element = hexcolor()
    arr.push(element)
  }
  return arr
}
console.table(colorArrays())
function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
function isEven(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}
//number component
const Number = ({number, bg})=> <div className='num' style={{background:bg}}>{number}</div>
//numbers component
const Numbers = ()=>{
  let numlist = numbers.map(number => {
    const color = ()=>{
      if (isPrime(number)) {
        return 'red'
      } else if (isEven(number)) {
        return 'green'
      } else {
        return 'yellow'
      }
    }
    return <Number key={number} number={number} bg={color()}/>
  } )
  return(
    <div>
     <h2 style={{textAlign:'center'}}>NUMBER GENERATOR</h2>
     <div className='num-wrapper'>{numlist}</div>
    </div>
  )
}
//hexadecimal component
const Hexadecimal =({hexadecimal})=> <div className='hex' style={{background: hexadecimal}}>{hexadecimal}</div>
//hexadecimals component
const Hexadecimals = ()=>{
  const hexdivs= colorArrays().map((hex)=>{
      let color = hexcolor()
      return <Hexadecimal  key={color} hexadecimal ={color}/>
  })
 
  return (
    <div>
     <h2 style={{textAlign:'center'}}> HEXADECIMAL COLOR GENERATOR</h2>

       <div className='hex-wrapper'>
      {hexdivs}
    </div>
    </div>
   
  )
}
//population component
const Population =({country:{country, population}, width})=>(
  <div className='country'>
    <div className='name'>{country.toUpperCase()}</div>  
    <div className='bar' style={{ background:'orange', width:width, height:'20px', padding:'5px'}}></div> 
    <div className='population'> {population}</div>
  </div>
) 
//populations component
const Populations = ({counts})=>{
  const countries = counts.map((country)=>{
    let bar =(( country.population / counts[0].population) * 100) + '%'
    console.log(bar)
     return <Population key={country.country} country={country} width={bar}/>
  })
  return <div>
    <h2>WORLD POPULATION</h2>
    {countries}
  </div>
}
//header comoponent
const Header = ()=>(
  <header>
    <div className='header-wrapper'>
    <h1>30 Days of React Day 6</h1>
    </div>
    </header>
)
// Country component
const Country = ({country:{name, city}})=> <div><h2>{name}</h2><h3>{city}</h3></div>
// countries component
const Countries = ({countries})=>{
  let countryList = countries.map((country)=> <Country key={country.name} country={country}/>)
  return(
    <div>{countryList}</div>
  )
}
//skill comoponent 
const Skill = ({skill:[tech, level]})=> (
  <li>{tech} {level}</li>
) 
//skills component 
const Skills =({skills})=>{
  let skillLists = skills.map((skil)=> <Skill key={skil} skill={skil}/>)
  return (<ul>{skillLists}</ul>)
}
// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <div className='main-wrapper'>
        <h1>Country lists</h1>
        <Countries countries={countries}/>
        <h1>Skills Level</h1>
        <Skills skills={skills}/>
        <Numbers />
        <Hexadecimals/>
        <Populations counts={tenHighestPopulations} />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
