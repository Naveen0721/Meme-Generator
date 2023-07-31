import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import Todoitem from "./Todoitem"
import Footer from "./Footer";
import MainContent from "./MainContent";
import tododata from "./data.js";
// import "./style.css"



// function APP()
// {
//     const sample=tododata.map(item=><Todoitem key={item.id} Header={item}/>)
//     return (
//         <div className="todo-list">
            
//             {sample}

//         </div>
//     )

// }

// class APP extends React.Component{
//     render()
//     {
//         const sample=tododata.map(item=><Todoitem key={item.id} Header={item}/>)
//     return (
//         <div className="todo-list">
            
//             {sample} 
          
//         </div>
//     )

//     }
// }
// function test()
// {
//     console.log("testedddddddddddddddddddddddd")
// }
// function APP()
// {
//     return(
//         <div>
//             <button onClick={test}>click me</button>
//         </div>
//     )
// }


////////////////////////practice/////////////////////////////
// class APP extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             count:0
//         }
//         this.update=this.update.bind(this)
//     }

//     update()
//     {
//         this.setState(prev=>
//             {
//                 return{
//                     count:prev.count+1
//                 }
//             })
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.update}>Change</button>
//             </div>
//         )
//     }
// }
// function APP()
// {
//     const sample=tododata.map(item=>(<Todoitem key={item.id} Header={item}/>))
//     return(
//         <div className="todo-list">
//          {sample}
//         </div>
//     )
// }
// class APP extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             todos:tododata
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(id)
//     {
//         this.setState(prev=>{
//             const updatedTodos=prev.todos.map(todo=>
//                 {
//                     if(todo.id===id)
//                     {
//                         todo.completed=!todo.completed
//                     }
//                     return todo
//                 })
//             return{
//                 todos:updatedTodos

//             }
          
//         })

//     }
//     render()
//     {
//         const todoItems=this.state.todos.map(item=><Todoitem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return(
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }
// export default APP

// class APP extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state={
//             count:0
//         }
//         this.Handlechange=this.Handlechange.bind(this)
//     }
//     Handlechange(){
//         this.setState(prev=>{
//             return{
//                 count: prev.count+1
//             }
//         })

//     }

//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.Handlechange}>Change!</button>
//             </div>

//         )
//     }

// }
// export default APP 

// class APP extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             todos:tododata
//         }
//         this.handleChange=this.handleChange.bind(this)

//     }
//     handleChange(id)
//     {
//         this.setState(prev=>{
//             const updatedtodos=prev.todos.map(todo=>
//                 {
//                 if(todo.id===id)
//                 {
//                     todo.completed=!todo.completed
//                 }
//                 return todo
//                 })
//                 return {
//                     todos:updatedtodos
//                 }
            
//         })


//     }
//     render()
//     {
//         const todoitems=this.state.todos.map(item=><Todoitem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return(
//             <div className="todo-list">
//                 {todoitems}
//             </div>
//         )
//     }
// }
// export default APP










// class APP extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             todos:tododata
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(id)
//     {
//         this.setState(prev=>{
//             const updatedTodos=prev.todos.map(todo=>
//                 {
//                     if(todo.id===id)
//                     {
//                         todo.completed=!todo.completed
//                     }
//                     return todo
//                 })
//             return{
//                 todos:updatedTodos

//             }
          
//         })

//     }
//     render()
//     {
//         const todoItems=this.state.todos.map(item=><Todoitem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return(
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }
// export default APP

//////////////////////////////////////////////////////////////////////// Todos application //////////////////////////////////////////////
// class APP extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             todos:tododata
//         }
//         this.handleChange=this.handleChange.bind(this)
        
//     }

//     handleChange(id)
//         {
//             this.setState(prev=>{
//                 const updatedTodos=prev.todos.map(todo=>
//                     {
//                         if(todo.id===id)
//                         {
//                             todo.completed=!todo.completed
//                         }
//                         return todo
//                     })
//                 return{
//                     todos:updatedTodos
    
//                 }
              
//             })
    
//         }

//     render()
//     {
//         const todoItems=this.state.todos.map(item=> <Todoitem key={item.id} item={item} handleChange={this.handleChange}/>)
//         return(
//             <div >
//                 {todoItems}
//             </div>
//         )

//     }
// }
// export default APP 


////////////////////////////////////////////// Meme Generator //////////////////////////////////////////////////////////


class APP extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(
            <div>
            </div>

        )
    }
}

export default APP