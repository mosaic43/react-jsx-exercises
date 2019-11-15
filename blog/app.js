let Header = () => {
    // return <span>Design a header for your blog</span>
    return <div className="green"><h2>A Blog on Cheese</h2></div>

}
let Article = () => {
    return <span>
        <div className="container">
        <h3>My Cheese Blog</h3>
        <h5>Types of Chees</h5>
        <li>Cheddar</li>
        <li>Goat Cheese</li>
        <li>Provolone</li>
        <li>Gouda</li>
       </div>
    </span>
}
let Footer = () => {
    return <span><div className="footer">Cheesy Cheese</div></span>
}

let Blog = () => {
    return <div className="green"><Header /> <Article /> <Footer /> </div>
}

ReactDOM.render(<Blog />,document.getElementById('root'))
