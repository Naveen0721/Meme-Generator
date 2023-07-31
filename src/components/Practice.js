import React from "react";
import ReactDOM from "react-dom";
import Conditional from "./Conditional"

// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state={
//             isloading:true
//         }
//     }
//     componentDidMount(){
        
//         setTimeout(()=>
        
//         this.setState(
//             {
//                 isloading:false
//             }
//         ),1500)
//     }

//     render()
//     {
//         return(
//             <div>
//                 {this.state.isloading?<h1>loadingggg</h1>:<Conditional/>}
                

//             </div>
//         )
//     }

// }

// export default Practice


// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state={
//             islogin:false
//         }
//         this.handlechange=this.handlechange.bind(this)
//     }
//     handlechange()
//     {
//         this.setState( prev=>{
//             return{
//                 islogin:!prev.islogin 
//             }
          
//         }
            
//         )

//     }
//     render()
//     {
//         return(
//             <div>
//                 {this.state.islogin?<h1>Loggedin</h1>:<h1>LoggedOut</h1>}
//                 <button onClick={this.handlechange}>{this.state.islogin?<h1>logout</h1>:<h1>login</h1>}</button>
                
//             </div>
//         )
//     }
// }

// export default Practice


// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             isloading:false,
//             character:{}
//         }
//     }
//     componentDidMount()
//     {
//         this.setState({
//             isloading:true
//         })
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response=>response.json())
//         .then(dataset=>
//             {
//                 console.log(dataset)
//                 this.setState(
//                     {
//                         character:dataset,
//                         isloading:false
//                     }
//                 )
               
//             })
            
//     }
//     render()
//     {
//         let text=this.state.isloading?"loading....":this.state.character.title
        
//         return(
//             <div>

//                 <h1>{text}</h1>

//             </div>
//         )
      
//     }

// }

// export default Practice

// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             firstname:"",
//             lastname:""

//         }
//         this.handlechange=this.handlechange.bind(this)

//     }

//     handlechange(event)
//     {
//         this.setState(
//             {
//                 [event.target.name]:event.target.value
//             }
//         )
//     }
//     render()
//     {
//         return(
//             <form >
//                 <input type="text" name="firstname" placeholder="first name" onChange={this.handlechange}/> 
//                 <br></br> <br></br>
//                 <input type="text" name="lastname" placeholder="Last name" onChange={this.handlechange}/>
//                 <h1><i>{this.state.firstname}</i></h1> 
//                 <h1>{this.state.lastname}</h1>
//             </form>
//         )
//     }
// }

// export default Practice

// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             isloading:true
//         }
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState(
//                 {isloading:false}
//             )},1500)

//     }

//     render()
//     {
//         return(
//             <div>
//                 {this.state.isloading ?<h1>Loading.....</h1>: <Conditional/>}

//             </div>
//         )
//     }
// }
// export default Practice

// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             loading:false,
//             character:{}
//         }
//     }
//     componentDidMount()
//     {
//         this.setState(
//             {
//                 loading:true
//             }
//         )
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then(response=>response.json())
//         .then(data=>
//             {
//                 this.setState(
//                     {
//                         character:data,
//                         loading:false
//                     }
//                 )
//             })
//     }
//     render()
//     {
//         return(
//             <div>
                
//                 {this.state.loading ? <h1>loadinggggg</h1> : <h1>{this.state.character.title}</h1>}

//             </div>
//         )
//     }
// }
// export default Practice

class Practice extends React.Component
{
  
    constructor()
    {
        super()
        this.state=
        {
            firstname:"",
            lastname:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event)
    {
        this.setState(
            {
                firstname:event.target.value
            }

        )
        

    }
    
    render()
    {
        return(
            <div>
                <form>
                    <input type="text" placeholder="FirstName" onChange={this.handleChange}/>
                </form>
                <p>{this.state.firstname}</p>

            </div>
        )
    }
}

export default Practice

// class Practice extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state=
//         {
//             firstname:"",
//             lastname:""

//         }
//         this.handlechange=this.handlechange.bind(this)

//     }

//     handlechange(event)
//     {
//         this.setState(
//             {
//                 [event.target.name]:event.target.value
//             }
//         )
//     }
//     render()
//     {
//         return(

//             <div>
//                 <form >
//                 <input type="text" name="firstname" placeholder="first name" onChange={this.handlechange}/> 
//                 {/* <br></br> <br></br>
//                 <input type="text" name="lastname" placeholder="Last name" onChange={this.handlechange}/> */}
                
//                 {/* <h1>{this.state.lastname}</h1> */}
//             </form>
//             <h1><i>{this.state.firstname}</i></h1> 



//             </div>
            
//         )
//     }
// }
// export default Practice