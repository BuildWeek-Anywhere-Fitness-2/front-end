import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

const Register = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        role: "",
        authCode: "",
    })

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const register = e => {
      e.preventDefault();
      if(user.role == "client"){
      axios
        .post(
          "https://anywherefitness-backend.herokuapp.com/api/auth/registeruser",
          user
        )
        .then(res => {
          console.log("register")
          localStorage.setItem("token", res.data.payload);
          props.history.push("/login");
        })
        .catch(err => console.log(err));

    } else if(user.role == "instructor") {
      axios
      .post(
        "https://anywherefitness-backend.herokuapp.com/api/auth/registertrainer",
        user
      )
      .then(res => {
        console.log("register")
        localStorage.setItem("token", res.data.payload);
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  } 
