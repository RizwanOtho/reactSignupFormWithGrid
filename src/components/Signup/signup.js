import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FaFacebookF, FaGoogle } from "react-icons/fa";

import Grid from '@material-ui/core/Grid';
import "./signup.css"



export default function Login() {

    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={12} lg={4}>
                    <div>
                        <center>
                            <h4 className="first">  Create Your Acount </h4>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#3b5998",
                                    color: "white",
                                    width: "98%",
                                    border: "1px solid #e0e0e0",
                                    margin: "0px 2px 6px 2px"
                                }}
                                disableElevation>
                                Login With Facebook
                                   <FaFacebookF style={{ marginLeft: "50%", color: "#white" }} />
                            </Button><br />
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#ce3d3d",
                                    color: "white",
                                    width: "98%",
                                    border: "1px solid #e0e0e0",
                                    margin: "0px 2px 6px 2px"

                                }}
                                disableElevation>
                                Login With Google
                                   <FaGoogle style={{ marginLeft: "50%", color: "white" }} />
                            </Button>
                            <br />
                            <input type="text" placeholder="FirstName"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}

                                className="input" /><br />
                            <input type="text" placeholder="LastName"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}

                                className="input" /><br />
                            <input type="text" placeholder="Enter Your Email"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}
                                className="input" /><br />
                            <input type="text" placeholder="Enter Your Password"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}

                                className="input" /><br />
                        </center>

                        <br />
                        <input type="botton" value="Create"
                            style={{
                                textAlign: "center",
                                color: "white",
                                backgroundColor: "black",
                                width: "30%",
                                padding: "7px",
                                border: "none",
                                borderRadius: "5px",

                            }}
                        />
                        <br />
                        <span><a href="#">Return to store</a></span>
                    </div>


                </Grid>
            </Grid>
        </div>
    );
}