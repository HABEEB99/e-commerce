import React, {useState} from 'react'
import { Brand, ButtonWrapper, CheckBoxWrapper, Close, CloseBar, Container, Form, 
   FormWrapper, Input, Like, Link, Nav, NavIcons,
Navigation, SearchBar, SearchIcon, SideNav, SignIn } from './header.styles'
import { navItems } from '../footer/footer.db'
import { NavLink, useHistory } from 'react-router-dom';
import { db } from '../../firebase/firebase.utils';
import {updateDoc, doc} from '@firebase/firestore';
import Cart from '../cart/Cart';
import CartDropdown from '../../cart-dropdown/CartDropdown';
import {connect} from 'react-redux'
import toggleNav from '../../redux/nav/nav.actions';
import toggleForm from '../../redux/form/form.action';
import { useAuth, logIn, logOut} from '../../firebase/firebase.utils';




const Header = ({hidden, close, toggleNav, isHidden, toggleForm}) => {
    
     const currentUser = useAuth();

     const history = useHistory();

     const [data, setData] =  useState({email: '', password: '', error: null, loading: false,});
          const{email, password, error, loading} = data;
          const handleChange = (e) => {
       setData({...data, [e.target.name] : e.target.value})
   };

       const handleLogin = async (e) => {
        e.preventDefault();
       setData({...data, error: null, loading: true});
         if (!email || !password) {
          setData({...data, error: "All fields must be filled"});
        }
       try {
           const result = await logIn( email, password);
           await updateDoc(doc(db, 'users', result.user.uid),{
             isOnline: true,
         });
         setData({email: "", password: "", error: null, loading: false,})
         history.replace("/");
          //   firebase.firestore().collection('users').doc(id).set({})
        } catch (error) {
           setData({...data, error: error.message, loading: false})
        }
     };

     const handleLogOut = async () => {

        setData({...data, error: null, loading: true});
        try {
           await logOut();
        } catch (error) {
         setData({...data, error: error.message, loading: false})
        }
     };

    return (
        <>
           <Container>
               <Brand>
                  <h3>HABEEB-STORE</h3>
               </Brand>

               <SearchBar>
                  <Input placeholder="    search item"/>
                  <SearchIcon/>
               </SearchBar>

               <NavIcons>
                 {currentUser ? (<h3 onClick={handleLogOut}>Logout</h3>) :  (<h3 onClick={toggleForm}>Login</h3>)}
                 <Like/>
                 <Cart/>
                 <Nav onClick={toggleNav}/>
               </NavIcons>
              
           </Container> 

           {close ? null : (
            <Navigation >
               <CloseBar onClick={toggleNav}><Close/></CloseBar>
               <SideNav onClick={toggleNav}>
                  {navItems.map(item => <Link key={item.id} to={item.path}>{item.name}</Link>)}
               </SideNav>
            </Navigation>
           )}


           {hidden ? null : (
            <CartDropdown/>
           )}
            
           {isHidden ? null : (
              
           <SignIn>
            <CloseBar onClick={toggleForm}><Close/></CloseBar>
            <FormWrapper>
               <h2>Login Form</h2>
               <Form onSubmit={handleLogin}>
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
           )}

        </>
    )
}

const mapStateToProps = ({cart: {hidden}, nav:{close}, form:{isHidden}}) => ({
   hidden,
   close,
   isHidden,
});


const mapDispatchToProps = dispatch => ({
   toggleForm : () => dispatch(toggleForm()),
   toggleNav : () => dispatch(toggleNav()),
   
})




export default  connect(mapStateToProps, mapDispatchToProps)(Header);
