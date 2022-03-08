import React, { useState } from 'react'
import {authz,db} from '../config/Config'
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

export const Signup = (props) => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const signupForm = document.querySelector('.form-group');
    const navigate = useNavigate(); 
    const colRef= collection(db, 'SignedUpUsersData');
    // console.log(name,password,email);
    
    const Signup = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(authz,email, password).then((cred) => {
            console.log('user created');
            // alert('Successfully registered');
            addDoc(colRef, {
                Email: email,
                Name: name,
                Password:password
            }).then(()=>{
                setEmail('');
                setName('');
                setPassword('');
                setError('');
                // console.log(document.getElementById('file').value);
            }).catch(err=>setError(err.message))
            navigate('/login');
            }).catch(err => setError(err.message));
    }
    return (
    <div className="container">
        <br/>
        <h2>Sign Up</h2>
        <hr/>
        <form autoComplete="off" className="form-group" onSubmit={Signup}>
        <label htmlFor="Name">Name</label>
        <br/>
        <input type="text" className='form-control' required onChange={(e)=>setName(e.target.value)} value={name}/>
        <br/>
        <label htmlFor="Email">Email</label>
        <br/>
        <input type="email" className='form-control' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br/>
        <label htmlFor="Password">Password</label>
        <br/>
        <input type="password" className='form-control' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <br/>
        <button className='btn btn-success btn-md mybtn' type='submit'>REGISTER</button>
        </form>
        {error && <div className='error-msg'>{error}</div>}
        <br/>
        <span>Already have an account? Login
                <Link to="/login"> Here</Link>
        </span>
    </div>
  )
}
