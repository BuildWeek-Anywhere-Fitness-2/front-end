import React from "react";
import {Button, Card} from "reactstrap";


export default function ClassesCard (props) {
    console.log(props)
    return (
        <span className="class-cards">
            <Card>
                <p> {props.Class.Class} </p>
                <p> {props.Class.Start} </p>
                <p> {props.Class.End} </p>
                <p> {props.Class.Trainer} </p>
                <Button className="register-button" style={{marginLeft:"30%", marginBottom:"5%"}}> RSVP</Button>
            </Card>
        </span>
    )
}
