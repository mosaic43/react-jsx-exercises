let TextInput = () => {
    // return <span>Make this component render a styled text input tag</span>
    return <div>
        <h1>What country would you like to visit?</h1>
        <br />
        <h3>Enter Country Name:</h3>
        <input type="text" id="Country" placeholder="Country Name" className="inputBox"></input>
        <br />
        <br/>
    </div>
}

let YesNoRadio = () => {
    // return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
    return <div>
        Do you have your passport? 
        Yes:<input type="radio" id="passportYes"></input> No:<input type="radio" id="passportNo"></input> 
    <br />
    <br />
    </div>
}
let SubmitButton = () => {
    // return <span>Make this component render a styled button of type "submit"</span>
    return <div>
        <button onclick="myFunction()" className="submit">Submit</button>
    </div>
}

let Form = () => {
    // return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    return <div className="container"><TextInput></TextInput>
    <YesNoRadio></YesNoRadio>
    <SubmitButton></SubmitButton>
    </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))

// ReactDOM.render(<Form />, document.getElementById('root'))