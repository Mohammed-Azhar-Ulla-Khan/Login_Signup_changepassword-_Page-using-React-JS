import React from "react";
import "./Signup.css"
import HeaderTwo from "./HeaderTwo";
import FooterTwo from "./FooterTwo";
class Signup extends React.Component{
    render(){
        return(
            <div className="singupcont">
                <HeaderTwo/>
                <form className="signup-form">
                    <h1>Signup</h1>
                    <label for="Firstame">First Name</label><br></br>
                    <input name="Firstname" type="text" placeholder="Enter First Name"></input><br></br>
                    <label for="Lastname">Last Name</label><br></br>
                    <input type="text" name="Lastname" placeholder="Enter Last Name"></input><br></br>
                    <label for="Email">Email</label><br></br>
                    <input name="Email" type="email" placeholder="Enter Email"></input><br></br>
                    <label for="dob">DOB</label><br></br>
                    <input type="date" name="dob"></input><br></br><br></br>
                    
                    <div className="radio">
                        <label for="male">Male</label>
                        <input type="radio" name="gender"></input><br></br>
                        <label>Female</label>
                        <input type="radio" name="gender"></input><br></br>
                        <label>Others</label>
                        <input type="radio" name="gender"></input><br></br>
                    </div><br></br>
                <div className="pass">
                    <label className="label1">Phone Number</label><br></br>
                    <input tpe="number" name="phno" placeholder="Enter Ph. No"></input><br></br>
                    <label>Username</label><br></br>
                    <input type="text" name="Username" placeholder="Enter Username"></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" placeholder="Enter Password"></input><br></br>
                    <label className="label1">Re-Write Password</label><br></br>
                    <input type="password" name="confirm" placeholder="Confirm Password"></input><br></br>
                </div>
<br></br>
                    <button className="but">Signup</button>
                </form>
                <br></br> <br></br> <br></br> 
            <FooterTwo/>
            </div>
        );
    }
}
export default Signup;