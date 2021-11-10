// import logo from './logo.svg';
// import './App.css';
// //import Todo from './Todo';
// //import Book from './Book';
// import NameTag from "./NameTag";

// function App() {
    // const book = {
    //   title:"코비", 
    //   author:"코비짱", 
    //   summary:"코비짱이 쓴 책",
    //   genre:"소설",
    //   release:"2021-10-28", 
    //   ISBN:12345
    // }

  //   return (
  //     <div className="App">

  //       <Book 
  //         title={book.title} 
  //         author={book.author}
  //         summary={book.summary} 
  //         genre={book.genre}
  //         release={book.release}
  //         ISBN={book.ISBN}></Book>

  //     </div>
  // );

// function App() {
//   return (
//     <div className="App">
//       <NameTag></NameTag>
//     </div>

//   );



// }
// }
// export default App;




// import logo from './logo.svg';
// import './App.css';
// import NameTag from "./NameTag";


// function App() {
//   return (
//     <div className="App">
//      <NameTag 
//      title="JAVA" 
//      author="KOBYJANG" 
//      dosummary="DB" 
//      genre="IT" 
//      release="21/10/28" 
//      ISBN={4123123}>
//      </NameTag>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css'; 
// import Counter from './Counter' 
// import React, { Component } from 'react'

// class App extends Component { 
//   state = {
//     name : 'parent'
//   }
//   changeName = () => {
//     this.setState( {name: "parent changed"})
//   }
//   render() {
//     console.log('parent')
//     const {name} = this.state
//     return (
//       <div className = "App">
//         <h1>{name}</h1>
//         <button type = "button" onClick = {this.changeName}>change name</button>
//         <Counter></Counter>
//       </div>
//     )
//   }
// }
// export default App;

// import logo from './logo.svg';
// import './App.css'; 
// import React, {Component} from 'react'
// import Counter from './Counter' 
// import YoutubeVideo from './YoutubeVideo'
// import dummyData from './dummyData'
// import { render } from '@testing-library/react';

// class App extends Component { 
//   render(){
//     return (
//       <div className ="App">
//         {dummyData.map(d => {
//           return (

//           <YoutubeVideo 
//             key={d.videoId}
//             videoId= {d.videoId} 
//             videoName= {d.videoName} 
//             videoLength= {d.videoLength} 
//             videoDescription= {d.videoDescription}
//             videoAuthor = {d.videoAuthor}
//           >
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/R4V1KJRHX38" 
//             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//             allowfullscreen></iframe>
//           </YoutubeVideo>
          
//         )
//         }
//         )}
     
//       </div>
//       );
//   }  
// }
// export default App;


// import React, {Component} from 'react'
// import logo from './logo.svg';
// import Counter from './Counter' 
// import './App.css';

// class App extends Component {
//   render() {
//     const person = {
//       name : 'dohyun',
//       age : 3
//     }
//     return (
//       <div className = "App">
//         <div>{person.name? "your name is nice !": "name doesn't exist !"} - {person.age}</div>
//       </div>
//     );
//   }

// }
// export default App;


// import React, {Component} from 'react'
// import logo from './logo.svg';
// import Counter from './Counter' 
// import './App.css';

// class App extends Component {
  
//   render() {
//     const person = {
//       name : 'dohyun',
//       age : 3
//     }
//     const personPage = (
//       <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       </>
//     )

    
//     const notFoundPage = (
//       <>
//       <h1>NotFound !</h1>
//       </>
//     )
//     if(person.name) {
//       return personPage
//     } else {
//       return notFoundPage
//     }
    
//   }

// }
// export default App;

import React from 'react'
import './App.css';
import words from './kor_dic_db.json'

const App = () => {
  const containerStyle = {
    width: '60%',
    columns: '2',
    margin: '40px auto'
  }

  const itemStyle = {
    width: '100%',
    marginBottom: '10px',
    background: 'tomato',
    display: 'inline-block',
  }
    return (
      <div id = "container" style={containerStyle}>
        <h1>사전 검색 서비스</h1>
        {words.map(word => {

          return(
            <>
              <div class="item" style={itemStyle}>
                <div class="word"><a href={word.r_link} target="_blank">{word.r_word}</a><sup>{word.r_seq ? word.r_seq : ""}</sup> {word.r_chi} - {word.r_pos}</div>
                <p class ="description">{word.r_des}</p>
              </div>
            </>
          )
        }
      )}
      </div>
    );
}
export default App;


