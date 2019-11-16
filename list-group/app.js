let ListGroupItem = () => {
    // return <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <div className="space">
        <h1>Tomato Soup</h1>
        <div className="ingredients">
        <h3>Ingredients</h3>
        <li>Tomatos</li>
        <li>Milk</li>
        <li>Salt</li>
        <li>Pepper</li>
        </div>
        <br />
        <br />
       </div>

}

let ListGroupItem2 = () => {
    return <div>
        <h1>Mashed Potatoes</h1>
        <div className="ingredients">
        <h3>Ingredients</h3>
        <li>Potatoes</li>
        <li>Garlic</li>
        <li>Water</li>
        <li>Pepper/Salt</li>
        </div>
       </div>

}
let ListGroupItem3 = () => {
    return <div>
        <h1>Broccoli and Cheese Casserole</h1>
        <div className="ingredients">
        <h3>Ingredients</h3>
        <li>Cheddar</li>
        <li>Broccoli</li>
        <li>Salt</li>
        <li>Pepper</li>
        </div>
       </div>

}

let ListGroup = () => {
    return <div className="container">
        <div className="rightSide">
        <h1 className="header1">Vegetable Recipes</h1>
        <div className="order">
        <ListGroupItem /><ListGroupItem2 />
        </div>
        <br />
        <div className="order2">
        <ListGroupItem3 />
        </div>
        </div>
        
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))