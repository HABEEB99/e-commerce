
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { Container } from "./app.styles";
import Header from "./components/header/Header";
import Home from "./directories/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router";
import SignUp from "./directories/signup/SignUp";
import Shop from "./directories/shop/Shop";


const theme = {
  color:{
    primary: "#244d4d",
    secondary: "#779",
    paper:"#fff",
    cool: "#f6fbf6",
    ash: "#bobec5"
  }
}
function App() {


 
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <GlobalStyles/>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
          <Footer/>
        </Container>
      </>
    </ThemeProvider>
  );
};



export default App;
