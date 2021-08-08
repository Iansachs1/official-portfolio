import React from "react";


const backgroundImage = {
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(/official-portfolio/assets/TempBackdropMonochrome.png)"
}

const textShadow = {
    textShadow: "1px 1px 10px #000000"
}

function Jumbotron(props) {
    return (
        <div id="home" classname="background"
            style={backgroundImage}>
            <div className=" h-100 d-flex justify-content-center align-items-center"
            style={textShadow}>
                <div>
                    <h1 className="display-1 text-white font-weight-bold">{props.title}</h1>
                    <p className="lead text-white" style={textShadow}>{props.description}</p>
                </div>

            </div>
        </div>
    );
}

export default Jumbotron;