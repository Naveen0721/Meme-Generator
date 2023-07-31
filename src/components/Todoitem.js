import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"
// function Todoitem(props)

// {
//     const styleee={
//         fontStyle:"italic",
//         color:"#cdcdcd",
//         textDecoration:"line-through"
//     }


//     return(
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} ></input>
//             <p style={props.item.completed?styleee:null}>{props.item.text}</p>

//         </div>
//     )
// //     return(
// //    <div className="todo-item">
// //     <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}></input>
// //     <p>{props.item.text}</p>
// //     {/* <p style={{color: !props.Header.text && "red"}}>name={props.Header.text} </p> */}
   
// //     <br/>    <br/>   <br/>   <br/>
    
// //    </div> 
// //     )
// }
// export default Todoitem

function Todoitem(props)
{
    const styleee={
                fontStyle:"italic",
                color:"#cdcdcd",
                textDecoration:"line-through"
            }
    return(
        <div>
        <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}></input>
        {/* <p style={props.item.completed && styleee}>{props.item.text}</p> */}
        <p style={props.item.completed?styleee:null}>{props.item.text}</p>
        </div>
    )

}

export default Todoitem
