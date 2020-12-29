import React, {useState} from 'react';
import './Form.css';

const Form =(props)=>{
    const{updatedTable}=props;
    const[userDetails, setUserDetails] =useState({
        userName:'',
        userEmail:'',
        userPhone:'',
    })

    const formValues= (event)=>{
        setUserDetails({
            ...userDetails,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit=e=>{
        e.preventDefault();
        updatedTable(userDetails)
    }

        return(
        <div className='container'>
            <h1 className='title'>Join Us</h1>
            <form onSubmit={handleSubmit} className='formTable'>
                <label >First Name:</label>
                <input 
                    required 
                    type='text' 
                    id='userName' 
                    name='userName' 
                    onChange={formValues}
               
                />
                <label >Last Name</label>
                <input 
                    required 
                    type='text' 
                    id='userLastName' 
                    name='userLastName' 
                    onChange={formValues}
                 
                />
                <label >Telephone</label>
                <input 
                    required 
                    type='number' 
                    id='userPhone' 
                    name='userPhone' 
                    onChange={formValues}
               
                />
             
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Form;