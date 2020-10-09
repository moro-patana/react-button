import React from "react"
import ReactDOM from "react-dom"
import Button from "./button.js"
function App() {
    return (
      <div className="app">
          <div className="item">
            <Button label="Default" title="<Button />"/>
          </div>

        <div className="item">
            <Button label="Default" title="<Button variant='outline' />" variant="outline" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button variant='text' />" variant="text" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button disableShadow />" variant="disabledshadow" />
        </div>
        <div className="item">
            <Button label="Disable" title="<Button disabled />" variant="disabled" />
            <Button label="Disable" title="<Button variant='text' disabled />" variant="text" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button iconStart='local_grocery_store' />" variant="iconStart" />
            <Button label="Default" title="<Button iconEnd='local_grocery_store' />" variant="iconEnd" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button size='sm' />" variant="sm" />
            <Button label="Default" title="<Button size='md' />" variant="md" />
            <Button label="Default" title="<Button size='lg' />" variant="lg" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button color='default' />" variant="button" />
            <Button label="Default" title="<Button color='primary' />" variant="primary" />
            <Button label="Secondary" title="<Button color='secondary' />" variant="secondary" />
            <Button label="Danger" title="<Button color='danger' />" variant="danger" />
        </div>

      </div>
    );
   }
ReactDOM.render(<App/>, document.getElementById("root"));