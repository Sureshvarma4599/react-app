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
        axios.get("https://backend-mailer-api.herokuapp.com/newuser")
        .then(res=>{
            console.log(res)
            this.setState({datas:res.data})
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
                
                   <h1>Mailers List</h1>
                  
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               <p>{data.email}</p>
             
                   
                    
                 
             
                         
            
              </span>
               ))}
               
            
               </div>
               <Link to="/send"><button id="btn">Send mail to Mailers</button></Link> 
           </React.Fragment>
        )
               }
}
