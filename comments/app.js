
let ProfilePic = () => {
    return  <div>
       <img src="drogo.JPG" />
        </div>
}


let CommentBody = () => {
    return  <div>
        <div className="title">Khal Drogo</div>
    <div className="subtitle">Khal Drogo, khal of pups.</div>
    <br />
    <div className="comments">
    <div className="commentBox">
        <b>Dog Sitter 1</b>
        <p>What a good pup! Very playful and loves attention.</p>
        </div>

     <div className="commentBox">
     <b>Dog Sitter 2</b>
     <p>What a good pup! Loves his food, but is very picky.</p>
     </div>

     <div className="commentBox">
     <b>Dog Sitter 3</b>
     <p>What a good pup! Very playful and loves attention</p>
     </div>
     </div>
     <br />
     <div className="comments">
    <div className="commentBox">
        <b>Dog Sitter 4</b>
        <p>What a good pup! Very playful and loves attention.</p>
        </div>

     <div className="commentBox">
     <b>Dog Sitter 5</b>
     <p>What a good pup! Loves his food, but is very picky.</p>
     </div>

     <div className="commentBox">
     <b>Dog Sitter 6</b>
     <p>What a good pup! Very playful and loves attention</p>
     </div>
     </div>
 </div>
    // <span>Make this component render a username in bold above the comment text</span>
}

let Comment = () => {
    return <div className="background">
        <ProfilePic /><CommentBody /></div>
    // <span>Make each comment render a profile picture and the comment body</span>


}

let Comments = () => {
    return <span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comment />, document.getElementById('root'))