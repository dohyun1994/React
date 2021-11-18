import { BrowserRouter } from "react-router-dom";
import App from './App.js'

// 함수 wrapping
function Browser() {
    return (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    )
}
export default Browser 