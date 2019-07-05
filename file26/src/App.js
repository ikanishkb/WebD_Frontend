import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import Banner from './components/header/Banner';

// import {name,age,person} from './data.js'
// function App() {
//   return (
//     <div>
//       <p>This is a para</p>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{person.name}</p>
//     </div>
//   );
// }

// import * as data from './data.js'
// function App() {
//   return (
//     <div>
//       <Banner/>
//       <p>This is a para</p>
//       <p>{data.name}</p>
//       <p>{data.age}</p>
//       <p>{data.person.name}</p>
//     </div>
//   );
// }

// import * as data from './data.js'
// class App extends Component {
//   render() {
//     return (
//       <div>
//           <Banner/>
//           <p>This is a para</p>
//           <p>{data.name}</p>
//           <p>{data.age}</p>
//           <p>{data.person.name}</p>
//       </div>
//     );  
//   }
// }

import Booklist from './Booklist'

const App = () => {
  return (
    <div>
      <h1>This is our app</h1>
      <Booklist/>
    </div>
  )
}


export default App; 