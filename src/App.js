import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Contact from "./components/contact";
function App() {
  
  
    const LOCAL_STORAGE_KEY=  "contact"
    const[contact,setContact]=useState([ {
      id:"1",
      name:"saravanan",
      email:"727723eucy051@skcet.ac.in",
    },
    {
      id:"2",
      name:"Sabarish",
      email:"727723eucy043@skcet.ac.in",
    },])
   const addthevalue = (input) =>
   {
      console.log(input)
      setContact([...contact,input])
      
    }
    useEffect(() => {
      const retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || false;
      setContact(retrive);
     }, [])

    useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact))
    }, [contact])
    return (
        <div>
             <Header />
             <Contact  contact={contact} addthevalue={addthevalue} setContact={setContact}/>
             {/* <Contactlist  /> */}
        </div>
  
  );
}

export default App;
