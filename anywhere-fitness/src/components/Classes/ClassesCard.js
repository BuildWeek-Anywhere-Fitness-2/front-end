import React from "react";
import {Button, Card} from "reactstrap";


export default function ClassesCard (props) {
    console.log(props)
    return (
        <span className="class-cards">
            <Card>
                <p> {props.singleClass.name} </p>
                <p> {props.singleClass.duration} </p>
                <p> {props.singleClass.type} </p>
                <p> {props.singleClass.intensity} </p>
                <Button className="register-button" style={{marginLeft:"30%", marginBottom:"5%"}}> RSVP</Button>
            </Card>
        </span>
    )
}
