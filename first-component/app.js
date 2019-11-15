let FirstComponent = () => {
    return <div className="red"></div>
}
let SecondComponent = () => {
    return <div className="green"></div>
}
let ThirdComponent = () => {
    return <div className="blue"></div>
}
let FourthComponent = () => {
    return <div className="yellow"></div>
}

let WindowsImage1 = () => {
    return <div className="window">
        <FirstComponent /> <SecondComponent />
    
    </div>
}

let WindowsImage2 = () => {
    return <div className="window">
       <ThirdComponent /><FourthComponent />
    </div>
}
let WindowsImage3 = () => {
    return <div>
       <WindowsImage1 />
       <WindowsImage2 />
    </div>
}

ReactDOM.render(<WindowsImage3 />, document.getElementById('root'))