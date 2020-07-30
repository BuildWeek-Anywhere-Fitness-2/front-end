import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { axios } from "../../utils/axiosWithAuth";
import RegisterformSchema from "./RegisterformSchema";
import Button from "../Button";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
};

const initialTrainers = {
  name: '',
  email: '',
  password: '',
}

const initialDisabled = true;

export default function UserForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [trainers, setTrainers] = useState(initialTrainers)
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  useEffect(() => {
    RegisterformSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const onInputChange = (e) => {
    const { name, value} = e.target;
    yup
      .reach(RegisterformSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newTrainer = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
console.log(newTrainer)
    axios
      .post("https://anywherefitness-backend.herokuapp.com/api/auth/registertrainer", newTrainer)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push("/trainerdashboard");
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-group-submit">
        <h2>General Info</h2>
        <div className="errors">
          {formErrors.name && <div>{formErrors.name}</div>}
          {formErrors.email && <div>{formErrors.email}</div>}
          {formErrors.password && <div>{formErrors.password}</div>}
        </div>
      </div>
      <div className="form-group-inputs">
        <label>
          Name:&nbsp;
          <input
            value={formValues.name}
            onChange={onInputChange}
            name="name"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            value={formValues.email}
            onChange={onInputChange}
            name="email"
            type="email"
          />
        </label>
        <label>
          Password:
          <input
            value={formValues.password}
            onChange={onInputChange}
            name="password"
            type="password"
          />
        </label>
      </div>
      <Button disabled={disabled} type="submit">
        Create
      </Button>
    </form>
  );
}
