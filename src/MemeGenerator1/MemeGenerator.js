import React from "react";
import ReactDOM  from "react-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"



class MemeGenerator extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            toptext:"",
            bottomtext:"",
            randomimage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }
        this.handlechange=this.handlechange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handlechange(event)
    {
        const {name,value}=event.target
        this.setState({
            [name]:value
        })

    }
    handleSubmit()
    {
        const random=Math.floor(Math.random()*this.state.allMemeImgs.length)
        this.setState(
            {
                randomimage:this.state.allMemeImgs[random].url
            }
        )


    }
    
    componentDidMount()

    {
        fetch("https://api.imgflip.com/get_memes")
    .then(response=>response.json())
    .then(response=>
        {
            const {memes}=response.data
            
            this.setState(
                {
                    allMemeImgs:memes
                }
            )
        })
    }

    render()
    {
        
        return(
            <div>
                <form className="forms">
                    <input type="text" placeholder="Top Text" name="toptext" value={this.toptext} onChange={this.handlechange}/>
                    <input type="text" placeholder="Bottom Text" name="bottomtext" value={this.bottomtext} onChange={this.handlechange}/>
                </form>

                <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Gen</button>
                <div className="meme">
                    <img src={this.state.randomimage} className="randomimage"></img>
                    <div className="toptext">{this.state.toptext}</div>
                    <h2 className="bottomtext">{this.state.bottomtext}</h2>
                </div>
                
                
            </div>
        )
    }

}

export default MemeGenerator