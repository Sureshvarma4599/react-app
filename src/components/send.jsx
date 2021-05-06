import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../App.css'
export default function Send() {
    const [text,setText]=useState("");
   
    const history = useHistory();

    const onEmailHandler = (e) =>{
        setText(e.currentTarget.value);
    }
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            text:text,
           
        }
        //console.log("user",user)
        axios.post('https://backend-mailer-api.herokuapp.com/content',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
          history.push("/list");
            alert(res.data)
         }   
         else{
             alert("adding failed")
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
             <div>
                 <textarea name="" id="" rows="20" cols="50" value={text} onChange={onEmailHandler}></textarea>
             </div>
             <div>
               <button onClick={onSubmitHandler}>Send a Mail</button> 
             </div>
         </form>
         </div>
      
    )
}
