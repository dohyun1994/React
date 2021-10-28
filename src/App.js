import logo from './logo.svg';
import './App.css';
//import Todo from './Todo';
import Book from './Book';

function App() {
    const book = {
      title:"코비", 
      author:"코비짱", 
      summary:"코비짱이 쓴 책",
      genre:"소설",
      release:"2021-10-28", 
      ISBN:12345
    }

    return (
      <div className="App">

        <Book 
          title={book.title} 
          author={book.author}
          summary={book.summary} 
          genre={book.genre}
          release={book.release}
          ISBN={book.ISBN}></Book>

      </div>
  );

// function App() {
//   return (
//     <div className="App">
//       <Todo name="dohyun" done={false} description="cleaning room!"></Todo>
//     </div>

//   );



}

export default App;
