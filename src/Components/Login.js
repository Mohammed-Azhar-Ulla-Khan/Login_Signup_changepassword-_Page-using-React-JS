import React from "react";
import "./Login.css"
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
class Login extends React.Component{
    render(){
        return(
            <div className="logincont">
                <Header/>
                <form className="login-form">
                   
                        
                        <h1>Login</h1>
                        <label for="Username">Username</label>
                        <br></br><input type="text" name="username" placeholder="Enter Username"></input><br></br><br></br>
                        <label for="Password">Password</label><br></br>
                        <input type="password" name="password" placeholder="Enter password"></input>
                        <p>Forget password <Link to="/password">Click Here</Link></p><br></br>
                        <button className="but">Login</button> 
                        <p>Don't have a account <Link to="/signup">Click Here</Link></p><br></br>
                    
                </form>
                   <br></br><br></br> <br></br> <br></br> <br></br> <br></br> 
            <Footer/>
            </div>
        );
    }
}
export default Login;