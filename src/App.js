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

// import React from 'react'
// import './App.css';
// import words from './kor_dic_db.json'

// const App = () => {
//   const containerStyle = {
//     width: '60%',
//     columns: '2',
//     margin: '40px auto'
//   }

//   const itemStyle = {
//     width: '100%',
//     marginBottom: '10px',
//     background: 'tomato',
//     display: 'inline-block',
//   }
//     return (
//       <div id = "container" style={containerStyle}>
//         <h1>사전 검색 서비스</h1>
//         {words.map(word => {

//           return(
//             <>
//               <div class="item" style={itemStyle}>
//                 <div class="word"><a href={word.r_link} target="_blank">{word.r_word}</a><sup>{word.r_seq ? word.r_seq : ""}</sup> {word.r_chi} - {word.r_pos}</div>
//                 <p class ="description">{word.r_des}</p>
//               </div>
//             </>
//           )
//         }
//       )}
//       </div>
//     );
// }
// export default App;


// import './App.css';
// import Button from './Button';

// function App() {
//   const handleClick = () => alert('clicked button')   // 이벤트핸들러 함수

//   return (
//       <div className="App">
//         <Button size="small" color="blue" handleClick={handleClick} disabled={true}>Add Todo</Button>
//         <Button size="medium" color="tomato">
//         <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px">
//         </img> 
//         Add Todo
//         </Button>
//         <Button size="large" color="gray">Add Todo</Button>
//       </div>  
//   );
// }

// export default App;


// 리액트 기초이론5 새로운 할일을 추가하기 위한 모달창 디자인
// import './App.css'; 
// import Modal from './Modal';
// import Button from './Button'; 
// import { Component } from 'react';

// class App extends Component {
//   state = {
//     open : false
//   }

//   openModal = () => {
//     this.setState( { open: true } )
//   }

//   closeModal = () => {
//     this.setState( {open: false} )
//   }

//   render() {
//   const { open } = this.state
//   const { openModal, closeModal} = this
//   return (
//     <div className="App">
//       <Button handleClick={openModal}>Add Todo</Button>
//       <Modal open={open}>
//         <div className="header">You want to add new todo ?</div>
//         <div className="body">
//           <label>todo name: <input type="text"></input></label><br/>
//           <label>todo description: <input type="text"></input></label>
//         </div>
//         <div className="footer">
//           <Button size="small">Add</Button>
//           <Button size="small" handleClick={closeModal}>Close</Button>
//         </div>
//       </Modal>
//     </div>
//     );
//   }
// }

// export default App;


// 11-11 리액트 기초이론 6- 요소참조(ref)
// import './App.css';
// import { Component } from 'react';
// import CustomInput from './CustomInput'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CustomInput></CustomInput>
//       </div>
//     );
//   }
// }

// export default App;


// import './App.css'; 
// import React, { Component } from 'react'; 

// class App extends Component { 
//   showAlert() { 
//     console.log(this) 
//     alert('this is alert message !') 
//   } render(){ 
//     return ( 
//       <div className="App"> 
//       <h1>Show alert !</h1> 
//       <button type="button" onClick={this.showAlert}>show</button> 
//       </div> 
//       ); 
//     } 
//   } 
//   export default App;


// 버튼 이벤트를 활용하여 간단한 이미지 뷰어 만들기
// import './App.css'; 
// import React, { Component } from 'react'; 
// import images from './imageData' 
// import Button from './Button' 

// class App extends Component { 
//   state = { 
//     index: 0 
//   } 
  
//   decreaseIndex = () => { 
//     const nextIndex = this.state.index - 1 
//     this.setState({index: (nextIndex < 0) ? images.length - 1 : nextIndex}) 
//   } 
//   increaseIndex = () => { 
//     const nextIndex = this.state.index + 1 
//     this.setState({index: (nextIndex > images.length - 1) ? 0 : nextIndex}) 
//   } 
  
//   render(){ 
//     const { index } = this.state 
//     const { increaseIndex, decreaseIndex } = this 
//     const path = images[index].src 
//     const title = images[index].title 
//     return ( 
//     <div className="App"> 
//     <div className="img-container"> 
//     <img src={path} alt={title}/> 
//     </div> 
    
//     <div className="control-btns"> 
//       <Button handleClick={decreaseIndex}>Prev</Button> 
//       <Button handleClick={increaseIndex}>Next</Button> 
//     </div> 
//   </div> 
//   ); 
// } 
// } 
// export default App


// 버튼 이벤트 이용하여 사이드바 메뉴 만들기.
// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 
// import Sidebar from './Sidebar' 

// class App extends Component { 
//   state = { 
//     toggle: false, 
//     menus: [ 
//       { 
//         icon: '♜', 
//         title: 'HOME' 
//       }, 

//       { 
//         icon: '♞', 
//         title: 'ABOUT' 
//       }, 

//       { 
//         icon: '☻', 
//         title: 'SETTING' 
//       }, 
      
//       { 
//         icon: '♜', 
//         title: 'HOME' 
//       }, 
      
//       { 
//         icon: '♞', 
//         title: 'ABOUT' 
//       }, 
      
//       { 
//         icon: '☻', 
//         title: 'SETTING' 
//       } 
//     ] 
//   } 
  
//   toggleMenu = () => { 
//     this.setState({toggle: !this.state.toggle}) 
//   } 
  
//   render(){ 
//     const { toggle, menus } = this.state 
    
//     return ( <div className="App"> 
//       <Button handleClick={this.toggleMenu}>Open sidebar</Button> 
      
//       <Sidebar open={toggle}> 
//         {menus.map( (menu, id) => { 
//           return <div className="menu" key={id}>{menu.icon} {menu.title} </div> 
//         })} 
//         </Sidebar> 
//       </div> 
//     ); 
//   } 
// } 
// export default App;

// 사용자 입력 처리하기
// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 

// class App extends Component {
//    state = { 
//      id: '', 
//      password: '' 
//   } 
//   handleChange = (e) => { 
//     const { name, value } = e.target 
//     console.log(name, value) 
//     this.setState({ [name]: value}) // 주석처리하면 사용자 입력이 되지 않음 
//   } 
//   login = (e) => { 
//     e.preventDefault() // 새로고침 방지 
//     console.log('login') 
//   } 
  
//   render(){ 
//     const { id, password } = this.state 
//     return ( 
//       <div className="App"> 
//         <form> 
//           <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} 
//             onChange={this.handleChange}></input></label><br/><br/> 
          
//           <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." 
//             name="password" value={password} onChange={this.handleChange}></input></label><br/><br/>
//           <div className="login-btn"><Button handleClick={this.login}>Login</Button></div> 
//         </form> 
//       </div> 
//     ); 
//   } 
// } 
//   export default App;


// 파일 업로드 처리하기
// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 

// class App extends Component { 
//   constructor(props){ 
//     super(props) 
//     this.state = { 
//       fileName: '', 
//       imgSrc: '' 
//     } 
//     this.fileInput = React.createRef() // ref 생성하기
//    } 

//   isValid = (type) => { 
//      return type === 'image' 
//   } 
    
//   handleChange = (e) => { 
//     console.log(e.target.files[0]) 
//     const file = e.target.files[0] 
//     const imgSrc = URL.createObjectURL(file) 
    
//     if(this.isValid(file.type.split('/')[0])){ 
//       this.setState({ fileName: file.name, imgSrc }) 
//     }else{ 
//       this.setState({ fileName: 'File is not valid type !', imgSrc: ''}) 
//     } 
  
//   } 
  
//   openFileWindow = () => { 
//     this.fileInput.current.click() // ref 사용하기 
//   } 
  
//   render(){ 
//     const { fileName, imgSrc } = this.state 
    
//     return ( 
//     <div className="App">
//       <h1>{fileName}</h1> {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img> 
//       } 
//       <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*"></input> 
//       <Button handleClick={this.openFileWindow}>Upload</Button> 
//     </div> 
//     ); 
//   } 
// } 
// export default App;



// * 이벤트 처리하기 연습과제 1
// import './App.css'; 
// import React, { Component } from 'react'; 
// import videos from './YoutubeVideos' 
// import Button from './Button' 

// class App extends Component { 
//   state = { 
//     index: 0 
//   } 
  
//   decreaseIndex = () => { 
//     const nextIndex = this.state.index - 1 
//     this.setState({index: (nextIndex < 0) ? videos.length - 1 : nextIndex}) 
//   } 
//   increaseIndex = () => { 
//     const nextIndex = this.state.index + 1 
//     this.setState({index: (nextIndex > videos.length - 1) ? 0 : nextIndex}) 
//   } 
  
//   render(){ 
//     const { index } = this.state 
//     const { increaseIndex, decreaseIndex } = this 
//     const path = videos[index].src 
//     const title = videos[index].title 
//     return ( 
//     <div className="App"> 
//     <div className="img-container"> 
//     <embed src={path}/> 
//     <p class="title">{title}</p>
//     </div> 
  
//     <div className="control-btns"> 
//       <Button handleClick={decreaseIndex}>Prev</Button> 
//       <Button handleClick={increaseIndex}>Next</Button> 
//     </div> 
//   </div> 
//   ); 
// } 
// } 
// export default App


// * 이벤트 처리하기 연습과제 2
// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 
// import loginData from './loginData';

// class App extends Component {
//    state = { 
//     isLogin: false,
//     id: '',
//     password: ''
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({[name]: value})
//   }

//   login = (e) => {
//     e.preventDefault()
//     const {id, password} = this.state
//     if(id === loginData.USER_ID && password === loginData.USER_PASSWORD) {
//       this.setState({isLogin: true})
//     } else {
//       alert('You failed to login!')
//     }
//   }


//   render(){
//     const {isLogin, id, password} = this.state
//     const loginForm = (
//       <form> 
//            <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={this.handleChange}></input></label><br/><br/> 
          
//            <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={this.handleChange} ></input></label><br/><br/>
//            <div className="login-btn"><Button handleClick={this.login}>Login</Button></div> 
//         </form> 
//     )
//     const homePage = (
//       <h1>홈페이지</h1>
//     )

//     return(
//       <div className="App">
//         {isLogin? homePage: loginForm}
//       </div>
//     )
//   } 
// } 
//   export default App;

// * 이벤트 처리하기 연습과제 3
// import './App.css'; 
// import React, { Component } from 'react'; 
// import Button from './Button' 
// import loginData from './loginData';
// import Modal from './Modal';

// class App extends Component {
//    state = { 
//     isLogin: false,
//     id: '',
//     password: '',
//     open: false,
//   }
  
//   openModal = () => {
//     this.setState({open:true})
//   }

//   closeModal = () => {
//     this.setState({open:false})
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({[name]: value})
//   }

//   login = (e) => {
//     e.preventDefault()
//     const {id, password} = this.state
//     if(id === loginData.USER_ID && password === loginData.USER_PASSWORD) {
//       this.setState({isLogin: true})
//     } else {
//       this.openModal()
//     }
//   }

//   render(){
//     const {isLogin, id, password, open} = this.state
//     const loginForm = (
//       <>
//       <form> 
//            <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={this.handleChange}></input></label><br/><br/> 
          
//            <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={this.handleChange} ></input></label><br/><br/>
//            <div className="login-btn"><Button handleClick={this.login}>Login</Button></div> 
//         </form>
//         <Modal open = {open}>
//           <p>You falied to login!</p>
//           <div className="close-btn">
//             <Button handleClick={this.closeModal}>Close</Button>
//           </div>
//         </Modal>
//       </>
//     )
//     const homePage = (
//       <h1>홈페이지</h1>
//     )

//     return(
//       <div className="App">
//         {isLogin? homePage: loginForm}
//       </div>
//     )
//   } 
// } 
//   export default App;

// * 이벤트 처리하기 연습과제 4
import './App.css';
import React, { Component } from 'react';
import Button from './Button'

class App extends Component {
  constructor(props){ 
    super(props) 
    this.state = {
      files: []
    }
    this.fileInput = React.createRef() // ref 생성하기 
  }
  isValid = (type) => {
    return type === 'image'
  }
 
  handleChange = (e) => {
    const files = e.target.files
    const uploadedFiles = []

    for(let file of files){
      if(this.isValid(file.type.split('/')[0])){
        console.log(file.name)

        const name = file.name
        const imgSrc = URL.createObjectURL(file)
        uploadedFiles.push({ name, imgSrc })
      }else{
        alert(`file [${file.name}] type is not valid !`)
      }
    }
    this.setState({ files: uploadedFiles})
  }
  openFileWindow = () => {
    this.fileInput.current.click() // ref 사용하기
  }

  render(){
    const { files } = this.state
   
    return (
      <div className="App">
        {files.length !== 0 && files.map( (file, id) => {
          return (
            <div key={id}>
              <h3>{file.name}</h3>
              <img src={file.imgSrc} alt={file.name} width="70px" height="100px"></img>
            </div>
          )
        })}
        <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
        <Button handleClick={this.openFileWindow}>Upload</Button>  
      </div>
    );
  }
}

export default App;