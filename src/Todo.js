import React, { Component } from 'react';

function Todo({ user, name, done, description}) {

    return ( 
        <> 
            <h3>name: {name} </h3> 
            <h4>done: {done? "finished": "not done!"}</h4>       
            <p>description: {description}</p> 
            <button type="button">change todo name</button>
        </> 
        ) 

    // // 초기 데이터 선언
    // state = {
    //         name: "cleaning", 
    //         done: false, 
    //         description: "cleaning my room on weekends"
    //     }
    

    // // 이벤트 핸들러 함수
    // changeTodoName = () => {
    //     console.log(this)
    //     this.setState( {name: "learning react"})
    // }


    // render() { // 데이터 선언 
    //     const { name, done, description } = this.state

    // // HTML 템플릿 
    // return ( 
    //     <> 
    //         <h3>name: {name} </h3> 
    //         <h4>done: {done? "finished": "not done!"}</h4>       
    //         <p>description: {description}</p> 
    //         <button type="button" onClick = {this.changeTodoName}>change todo name</button>
    //     </> 
    //     ) 
    // } 
} 

export default Todo;

