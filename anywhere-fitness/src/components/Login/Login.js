import React, { useState } from "react";
import { Card, Button, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        usernameTouched: false,
        passwordTouched: false
    });


    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, [`${e.target.name}Touched`]: true });
    }

    const login1 = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/userlogin", formData)
            .then(res => {
                console.log("hello");
                console.log(res.data);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/classes");
            })
            .catch(err => {
                console.log(err)

                // Form validation.
                if (formData.username === '' && formData.password === '') {
                    console.log('Error: fill out empty fields');
                    setFormData({ ...formData, usernameTouched: true, passwordTouched: true });

                } else if (formData.username === '') {
                    setFormData({ ...formData, usernameTouched: true });
                } else if (formData.password === '') {
                    setFormData({ ...formData, passwordTouched: true });
                }

                if (err.response.status === 401) {
                    alert('Either username or password is invalid!');
                }
            });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/trainerlogin", formData)
            .then(res => {
                console.log("hello");
                console.log(res.data);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/add-class");
            })
            .catch(err => {
                console.log(err)

                // Form validation.
                if (formData.username === '' && formData.password === '') {
                    console.log('Error: fill out empty fields');
                    setFormData({ ...formData, usernameTouched: true, passwordTouched: true });

                } else if (formData.username === '') {
                    setFormData({ ...formData, usernameTouched: true });
                } else if (formData.password === '') {
                    setFormData({ ...formData, passwordTouched: true });
                }

                if (err.response.status === 401) {
                    alert('Either username or password is invalid!');
                }
            });
    };
