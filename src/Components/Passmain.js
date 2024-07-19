import React from "react";
import "./Passmain.css"
import Password from "./Password";
import FooterThree from "./FooterThree";
class Passmain extends React.Component{
    render(){
        return(
            <div className="passcont">
                <Password/>
                <form className="pass-form">
                    <h1>Change Password</h1><br></br>
                    

                    <label>Phone Number</label><br></br>
                    <input type="number" name="phno" placeholder="Enter Ph. No"></input><br></br>
                    <label>Username</label><br></br>
                    <input type="text" name="Username" placeholder="Enter Username"></input><br></br>
                    <label for="Email">Email</label><br></br>
                    <input name="Email" type="email" placeholder="Enter Email"></input><br></br>
                    <label>Phone Number</label><br></br>
                    <input type="number" name="phno" placeholder="Enter Ph. No"></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" placeholder="Enter Password"></input><br></br>
                    <label name="cf">Re-Write Password</label><br></br>
                    <input type="password" name="confirm" placeholder="Confirm Password"></input><br></br><br></br>

                    <button className="butt">Submit</button> 
                    <button className="butt">Reset</button>

                </form>
                <br></br><br></br>
                <FooterThree/>
            </div>
        );
    }
}
export default Passmain;