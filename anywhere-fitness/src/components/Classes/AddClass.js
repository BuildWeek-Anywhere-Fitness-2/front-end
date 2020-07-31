import React, { useState, useEffect, useContext } from "react";
import {
  Col,
  Container,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ClassesContext } from "context";
import axios from "axios";

const initialValues = {
  name: "",
  description: "",
  start: "",
  end: "",
};

const AddClass = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChanges = (e) => {
    const { value, name } = e.tartget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-class">
      <Container>
        <h1>Add Class</h1>
        <Card>
          <CardBody>
            <Form>
              {/* Name */}
              <FormGroup row>
                <Label for="name" sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name of class"
                    value={formValues.name}
                    onChange={handleChanges}
                  />
                </Col>
              </FormGroup>

              {/* Type */}
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    value={formValues.description}
                    type="type"
                    name="type"
                    id="type"
                    placeholder="Enter type of class"
                    onChange={handleChanges}
                  />
                </Col>
              </FormGroup>

              {/* Start Date */}
              <FormGroup row>
                <Label for="start" sm={2}>
                  Start Time
                </Label>
                <Col sm={10}>
                  <Input
                    type="datetime-local"
                    name="start"
                    id="start"
                    placeholder="Start time"
                    onChange={handleChanges}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="end" sm={2}>
                  Start Time
                </Label>
                <Col sm={10}>
                  <Input
                    type="datetime-local"
                    name="end"
                    id="end"
                    placeholder="End time"
                    value={formValues.end}
                    onChange={handleChanges}
                  />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button type="submit" className="login-button">
                    Submit
                  </Button>
                  <Button type="reset">Cancel</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default AddClass;
