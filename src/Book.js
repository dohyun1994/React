import React from "react";
//import './App.css';

function Book({title, author, summary, genre, release, ISBN}) {
    
        //const {country, name, age} = props    // 부모로부터 전달되는 값

        return (
            <>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h3>{summary}</h3>
                <h3>{genre}</h3>
                <h3>{release}</h3>
                <h3>{ISBN}</h3>
            </>
        )
}

export default Book;