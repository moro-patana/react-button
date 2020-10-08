import React from "react"
import ReactDOM from "react-dom"
import ButtonComponent from "./button.js"
function App() {
    return (
        <div>
            <ButtonComponent/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));