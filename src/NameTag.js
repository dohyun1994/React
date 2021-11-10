// import React, { Component } from 'react'

// class NameTag extends Component {
//     state = {
//         name:  "initial name"
//     }

//     // 이벤트핸들러 함수
//     changeName = () => {
//         this.setState = "changed name" 
//     }
//     render() {
//         console.log('NameTag')
//         const { name } = this.state
//         return (
//             <>
//                 <h1>{name}</h1>
//                 <button type = "button" onClick ={() => this.changeName()}>change name</button>
//             </>
//         )

        
//     }
// }
// export default NameTag;

import React from 'react'
import { Component } from 'react';

class NameTag extends Component {
    state = {
        name: 'initial name'

    }
    // 이벤트 핸들러 함수
    changeName = () => {
       //this.state.name = "changed name" //랜덤함수로 안들어오니까 작동하지 않는다.
        this.setState({name:'changed name'})
    }
    render(){
        console.log('NameTag')
        const {name,dffd} = this.state
        return(
            <>
                <h1>{name}</h1>
                <button type ="button" onClick={() => this.changeName()}>change Name</button>
            </>
        )//() => this.changeName() 와 this.changeName 는 같다 
    }
}

export default NameTag;