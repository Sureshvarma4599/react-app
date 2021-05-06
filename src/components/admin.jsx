import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../App.css'
export default function Admin() {
    const [admin_email,setEmail]=useState("");
    const [pwd,setPassword]=useState("");
    const history = useHistory();

    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            admin_email:admin_email,
            pwd:pwd
        }
        //console.log("user",user)
        axios.post('https://backend-mailer-api.herokuapp.com/adminLogin',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
          history.push("/list");
            alert(res.data)
         }   
         else{
             alert("login failed")
            // history.push("/");
         }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   

    return (
        <div>
                    
              <form onSubmit={onSubmitHandler}>
             <div className="input">
             <input type="email" placeholder="enter your email" id="email" value={admin_email} onChange={onEmailHandler}/>
             </div>
             <div className="input">
             <input type="password" placeholder="enter your password" id="password" value={pwd} onChange={onPasswordHandler}/>
             </div>
             <div className="input">
             <button type="submit" > ADMIN LOGIN</button>
             </div>
            
         </form>
         </div>
      
    )
}
