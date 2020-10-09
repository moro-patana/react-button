import React from "react"
import ReactDOM from "react-dom"
import Button from "./button.js"
const icon = "shopping_cart.svg"
function App() {
    return (
      <div className="app">
          <div className="item">
            <Button label="Default" title="<Button />"/>
            <Button label="Default" title="&:hover, &:focus" type="hover" />
          </div>

        <div className="item">
            <Button label="Default" title="<Button variant='outline' />" type="outline" />
            <Button label="Default" title="&:hover, &:focus" type="outlinehover" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button variant='text' />" type="text" />
            <Button label="Default" title="&:hover, &:focus" type="texthover" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button disableShadow />" type="disable" />
        </div>
        <div className="item">
            <Button label="Disable" title="<Button disabled />" type="disableshadow" />
            <Button label="Disable" title="<Button variant='text' disabled />" type="disabletext" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button iconStart='local_grocery_store' />" type="iconStart" />
            <Button label="Default" title="<Button iconEnd='local_grocery_store' />" type="iconEnd" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button size='sm' />" type="sm" />
            <Button label="Default" title="<Button size='md' />" type="md" />
            <Button label="Default" title="<Button size='lg' />" type="lg" />
        </div>
        <div className="item">
            <Button label="Default" title="<Button color='default' />" type="button" />
            <Button label="Default" title="<Button color='primary' />" type="primary" />
            <Button label="Secondary" title="<Button color='secondary' />" type="secondary" />
            <Button label="Danger" title="<Button color='danger' />" type="danger" />
        </div>
        <div className="item">
            <Button label="Default" title="&:hover, &:focus" type="hover" />
            <Button label="Default" title="&:hover, &:focus" type="primaryhover" />
            <Button label="Secondary" title="&:hover, &:focus" type="secondaryhover" />
            <Button label="Danger" title="&:hover, &:focus" type="dangerhover" />
        </div>


      </div>
    );
   }
ReactDOM.render(<App/>, document.getElementById("root"));