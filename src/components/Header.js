import React from "react";
import ReactDOM  from "react-dom";
// import './index.css'

function Header(props)
{
    return(
        // <header className="navbar">This is the Header </header>
        <div>
            <h2>{props.Header.name}</h2>
            <p>
               { props.Header.price}
               <br></br>
               {props.Header.description}
            </p>
        </div>
        

    )
}

export default Header