import React, { Component } from 'react'
import words from './dummyData'
import Button from './Button'

class CustomInput extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef()      // ref 생성하기
    }

    focusInput = () => {
        console.log(this.fileInput.current)
        this.fileInput.current.click()      // ref 사용하기
    }
    render() {
        return (
            <div className="App">
                <h1>File Upload</h1>
                <button type="button">Upload</button>
                <Button handleclick={this.openFileUploadWindow}>Upload</Button>
                <input type="file" style={{visibility:'hidden'}} ref={this.fileInput}></input>
            </div>
           
        )
    }
}

export default CustomInput