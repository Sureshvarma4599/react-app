import axios from 'axios';
import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom';

export default class View extends Component {
    constructor(){
    super();
    this.state={
        datas:[],
        reload:false
    }
    }
    componentDidMount(){
        axios.get("https://backend-mailer-api.herokuapp.com/content")
        .then(res=>{
            console.log(res)
            const rev= res.data.reverse()
            console.log(rev)
            this.setState({datas:rev})
        })
        .catch(err=>{
            console.log(err)
        })
    }
  
    render() {
        return (
           <React.Fragment>
              <Link to="/"> <button id="logout">Logout</button></Link>
               <div className="views">
                   <div className="h1"><h1>Hello User, Here are your Mails</h1></div>
                  <br />
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
                New Mail:<h2> {data.text}</h2>
             
                   
                    
                 
             
                         
            
              </span>
               ))}
               
            
               </div>
               
           </React.Fragment>
        )
               }
}
