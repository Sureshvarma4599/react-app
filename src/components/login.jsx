import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../App.css'
export default function Admin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
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
            email:email,
            password:password
        }
        //console.log("user",user)
        axios.post('https://backend-mailer-api.herokuapp.com/login',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
          history.push("/view");
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
             <input type="email" placeholder="enter your email" id="email" value={email} onChange={onEmailHandler}/>
             </div>
             <div className="input">
             <input type="password" placeholder="enter your password" id="password" value={password} onChange={onPasswordHandler}/>
             </div>
             <div className="input">
             <button type="submit" >LOGIN</button>
             </div>
            
         </form>
         </div>
      
    )
}
