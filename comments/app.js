
let ProfilePic = () => {
    return  <div className="green">
       <img src="drogo.JPG" />
        </div>
}

let CommentBody = () => {
    return  <div className="green"><b><h1>Khal Drogo</h1></b>
    <p>Khal Drogo, khal of pups.</p>
    </div>
    // <span>Make this component render a username in bold above the comment text</span>
}

let Comment = () => {
    return <div><ProfilePic /><CommentBody /></div>
    // <span>Make each comment render a profile picture and the comment body</span>


}

let Comments = () => {
    return <span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comment />, document.getElementById('root'))