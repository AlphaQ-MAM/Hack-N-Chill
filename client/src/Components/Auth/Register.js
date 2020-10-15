import React, { useState,useEffect } from 'react';
import M from 'materialize-css';
import styles from './Register.module.css';



const Register = () => {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [number ,setNumber ]=useState();
    const [category ,setCategory ]=useState();
    
    const signUpDetails= {username,email,password,number,category}
    
    useEffect(() => {
        //effect
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
         console.log("use effect running");
    }, []);
   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(signUpDetails);
       fetch('http://localhost:5000/signup', {
        method: "POST",
        body: JSON.stringify(signUpDetails),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
      
   }
    return (
        <div className="container-fluid center">
            <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <h1>Register</h1>
                <form  onSubmit={handleSubmit}
                className="col s12 m8 l6 offset-m3 offset-l3">
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="username" type="text" value={username||''} onChange={(e)=>setUsername(e.target.value)} className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" value={email||''} onChange={(e)=>setEmail(e.target.value)} className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" type="password" value={password||''} onChange={(e)=>setPassword(e.target.value)} className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="number" type="text" value={number ||''} onChange={(e)=>setNumber(e.target.value)} className="validate" />
                            <label htmlFor="number">Phone number</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select  name="category" defaultValue={'None'} onChange={(e)=>setCategory(e.target.value)} >
                            <option value="None" disabled >None</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>

                        </select>
                        <label>Choose Category</label>
                    </div>
                    <button className={styles.btn}>Register</button>

                </form>
            </div>
        </div>
    );
};

export default Register;
