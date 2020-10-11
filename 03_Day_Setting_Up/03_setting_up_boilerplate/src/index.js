// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import asabenehImage from "./images/asabeneh.jpg";
import cssImage from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import reactLogo from "./images/react_logo.png";
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from "./math.js";

// to import the other modules
// since these modules were not exported as default we have to desctructure
// import { addTwo, multiply, subtract } from "./math.js";

// import * as everything from "./math.js";
// console.log(addTwo(5, 5));
console.log(doSomeMath.addTwo(5, 5));
console.log(doSomeMath.modulus(9, 7));
// console.log(everything.addTwo(2, 3));
// JSX element, header

// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
     firstName: "Asabeneh",
     lastName: "Yetayeh",
     position: "Senior Developer, Finland",
     fullNameCaps: function () {
          var first = this.firstName.toUpperCase();
          var last = this.lastName.toUpperCase();
          return `${first} ${last} ✔`;
     },
};
const date = "Oct 2, 2020";

// JSX element, header
const header = (
     <header>
          <div className="header-wrapper">
               <h1>{welcome}</h1>
               <h2>{title}</h2>
               <h3>{subtitle}</h3>
               <p>
                    Instructor: {author.firstName} {author.lastName}
               </p>
               <small>Date: {date}</small>
          </div>
     </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
     <p>
          {numOne} + {numTwo} = {numOne + numTwo}
     </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
     <p>
          {" "}
          {author.firstName} {author.lastName} is {age} years old
     </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const imagestyle = { width: "100%", maxWidth: "500px" };

//***********EXERCISES*********
const skills = [
     "HTML",
     "CSS",
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
const skillsList = skills.map((skil) => <li>{skil}</li>);
// JSX element, main
const main = (
     <main>
          <div className="main-wrapper">
               <p>
                    Prerequisite to get started{" "}
                    <strong>
                         <em>react.js</em>
                    </strong>
                    :
               </p>
               <ul>{techsFormatted}</ul>
               {result}
               {personAge}
          </div>
          {/* exercise */}
          <div className="exercise">
               <h1>Exercises</h1>
               <div className="excOne">
                    <h2>Ecercise One</h2>
                    <div className="frontEnd">
                         <p>Front End Technologies</p>
                         <div className="techWrapper">
                              <img src={htmlLogo} alt="html image"></img>
                              <img src={cssImage} alt="css image"></img>
                              <img src={reactLogo} alt="react image"></img>
                              <img
                                   src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
                                   alt="react image"
                              ></img>
                         </div>
                    </div>
               </div>

               <div className="excTwo">
                    <h2>Ecercise Two</h2>
                    <p>User Card</p>
                    <div className="wrapper">
                         <div className="wrapper1">
                              <img src={asabenehImage} alt="html image"></img>
                              <h3>{author.fullNameCaps()}</h3>
                              <small>{author.position}</small>
                              <div className="skills">
                                   <h3>SKILLS</h3>
                                   <ul>{skillsList}</ul>
                              </div>
                              <div className="joined">
                                   <small>Joinedon Aug, 30, 2020</small>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="excThree">
                    <h2>Ecercise Two</h2>
                    <p>subscribription</p>
                    <div className="wrapper">
                         <div className="wrapper1">
                              <h1>SUBSCRIBE</h1>
                              <p>
                                   Sign Up with your email address to receive
                                   news and updates
                              </p>
                              <form>
                                   <div className="inputs">
                                        <input
                                             type="text"
                                             placeholder="First Name"
                                        ></input>
                                        <input
                                             type="text"
                                             placeholder="Last Name"
                                        ></input>{" "}
                                        <input
                                             type="text"
                                             placeholder="Email"
                                        ></input>
                                   </div>
                                   <input
                                        className="submit"
                                        type="submit"
                                        value="Subscribe"
                                   />
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     </main>
);
const copyRight = `Copyright ${currentYear}`;
// JSX element, footer
const footer = (
     <footer>
          <div className="footer-wrapper">
               <p>{copyRight}</p>
          </div>
     </footer>
);

// JSX element, app
const app = (
     <div className="app">
          {header}
          {main}
          {footer}
     </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
