import React, { useState } from 'react'
import '../style.css'
import user from './ic.jpg'
import deletelist from './delete.png'

import 'react-toastify/dist/ReactToastify.css';
function Contact(props) {
  const [input,setInputs]=useState({name:"",email:""});
 
  function deletethe(id)
  {
      const newlist=props.contact.filter((l)=>l.id !== id );
       props.setContact(newlist);
  }

  function add(e)
  {
    e.preventDefault();
    if(input.name==="" && input.email===""){
      alert("Pls... Enter the value")
      return;
    } 
    props.addthevalue(input);
    setInputs({name:"",email:""})
  
  }
 
  return (
    <div>
         <div className='contact'>
              <h2>Add User</h2>
               <input placeholder='Enter your Name' value={input.name} onChange={(e)=>{setInputs((previous)=>{return{...previous,name:e.target.value}})}}></input>
               <input placeholder='Enter your Email' value={input.email} onChange={(e)=>{setInputs((previous)=>{return{...previous,email:e.target.value}})}}></input>
               <button onClick={add}>Submit</button>
         </div>
   
         <div> 
        
    {/* ------------------------contactlist------------ */}
        <div className='listcontainer'>
             <h2>User List</h2>
            {props.contact.map((list)=>{   
              return (
                <div>
                <div className='contactlist' key={list.id}> 
                      <div className='list-left'>
                               <img src={user} alt='user'></img>  
                                <div>
                                     <h4>{list.name}</h4> 
                                      <p>{list.email}</p>
                                </div>
                      </div>
                      <div className='list-right'>
                                <img src={deletelist} alt='delete' onClick={()=>deletethe(list.id)}></img>
                      </div>
                 </div>
                 </div>)
               })
             
                }
        </div>
     </div>
    </div>
  )
}

export default Contact 
