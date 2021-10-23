import React, {useState} from 'react'
import { Container, Form, FormWrapper, InputWrapper } from './register.styles'
import { NavLink, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../../firebase/firebase.utils';
import { setDoc, doc, Timestamp } from '@firebase/firestore';



const Register = () => {

    const history = useHistory();
    
    const [data, setData] =  useState({name: '', email: '', password: '', error: null, loading: false,});
    const{name, email, password, error, loading} = data;
    const handleChange = (e) => {
       setData({...data, [e.target.name] : e.target.value})
    };


    const handleSubmit = async (e) => {
       e.preventDefault();
       setData({...data, error: null, loading: true});
         if (!name || !email || !password) {
           setData({...data, error: "All fields must be filled"});
        }
       try {
          const result = await createUserWithEmailAndPassword(auth, email, password);
          await setDoc(doc(db, 'users', result.user.uid),{
             uid: result.user.uid,
             name,
             email,
             createdAt: Timestamp.fromDate(new Date()),
             isOnline: true,
          });
          setData({name: "",email: "", password: "", error: null, loading: false,})
          history.push("/");
         //   firebase.firestore().collection('users').doc(id).set({})
       } catch (error) {
          setData({...data, error: error.message, loading: false})
       }
    }

    return (
        <>
          <Container>
             <FormWrapper>
               <h1>Register A New Account</h1>
               <Form onSubmit={handleSubmit}>
                  <InputWrapper>
                    <label htmlFor="name">NAME:</label>
                    <input id="name" type="text" name="name" value={name} onChange={handleChange}/>
                  </InputWrapper>
                  <InputWrapper>
                    <label htmlFor="email">EMAIL:</label>
                    <input id="email" type="text" name="email" value={email} onChange={handleChange}/>
                  </InputWrapper>
                  <InputWrapper>
                    <label htmlFor="password">PASSWORD:</label>
                    <input id="password" type="password" name="password" value={password} onChange={handleChange}/>
                  </InputWrapper>
                  <h4>{error}</h4>
                  <button disabled={loading}>
                  {loading ? "Creating a new account" : "SIGN UP"}
                  </button>
               </Form>
             </FormWrapper>
          </Container>
        </>
    )
}

export default Register
