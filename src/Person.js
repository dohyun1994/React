import React from "react";
//import './App.css';

function Person({country, name, age}) {
    
       
        //const {country, name, age} = props    // 부모로부터 전달되는 값

        return (
            <>
                <h1>{country}</h1>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </>
        )
    
}
export default Person;