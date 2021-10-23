import React, {useState} from 'react'
import { Brand, ButtonWrapper, Cart, CheckBoxWrapper, Close, CloseBar, Container, Form, 
   FormWrapper, Input, Like, Link, Nav, NavIcons,
Navigation, SearchBar, SearchIcon, SideNav, SignIn, User } from './header.styles'
import { navItems } from '../footer/footer.db'
import { NavLink, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../../firebase/firebase.utils';
import {updateDoc, doc} from '@firebase/firestore';




const Header = () => {

     const history = useHistory();

     const [data, setData] =  useState({email: '', password: '', error: null, loading: false,});
          const{email, password, error, loading} = data;
          const handleChange = (e) => {
       setData({...data, [e.target.name] : e.target.value})
   };

       const handleSubmit = async (e) => {
        e.preventDefault();
       setData({...data, error: null, loading: true});
         if (!email || !password) {
          setData({...data, error: "All fields must be filled"});
        }
       try {
           const result = await signInWithEmailAndPassword(auth, email, password);
           await updateDoc(doc(db, 'users', result.user.uid),{
             isOnline: true,
         });
         setData({email: "", password: "", error: null, loading: false,})
         history.replace("/");
          //   firebase.firestore().collection('users').doc(id).set({})
        } catch (error) {
           setData({...data, error: error.message, loading: false})
        }
     }

    const [openNav, setOpenNav] = useState(true);
    const toggleNav = () => setOpenNav(!openNav); 
     
    const [openForm, setOpenForm] = useState(true);
    const toggleForm = () => setOpenForm(!openForm);

    return (
        <>
           <Container>
               <Brand>
                  <h3>HABEEB-STORE</h3>
               </Brand>
               <SearchBar>
                  <Input/>
                  <SearchIcon/>
               </SearchBar>
               <NavIcons>
                 <User onClick={toggleForm}/>
                 <Like/>
                 <Cart/>
                 <Nav onClick={toggleNav}/>
               </NavIcons>
              
           </Container> 

           <Navigation nav={openNav}>
                <CloseBar onClick={toggleNav}><Close/></CloseBar>
                <SideNav onClick={toggleNav}>
                    {navItems.map(item => <Link key={item.id} to={item.path}>{item.name}</Link>)}
                </SideNav>
           </Navigation>

           <SignIn form={openForm}>
              <CloseBar onClick={toggleForm}><Close/></CloseBar>
              <FormWrapper>
                 <h2>Login Form</h2>
                 <Form onSubmit={handleSubmit}>
                   <input type="text" name="email" value={email} onChange={handleChange} placeholder="enter your email" />
                   <input type="password" name="password" value={password} onChange={handleChange} placeholder="enter your password" />
                   <CheckBoxWrapper>
                     <input type="checkbox" id="checkbox" value="Remember Me" />
                     <label for="checkbox">Remember Me</label>
                   </CheckBoxWrapper>
                   <p>{error}</p>
                   <ButtonWrapper>
                     <button disabled={loading}>{loading ? "Signing in" : "Sign in"}</button>
                     <button>Sign in with Google</button>
                   </ButtonWrapper>
                   <h5>Forget Password? <NavLink to="/">Click Here</NavLink></h5>
                   <h5>Don't Have An Account? <NavLink to="/signup">Create New</NavLink></h5>
                 </Form>
              </FormWrapper>
           </SignIn>
        </>
    )
}

export default Header
