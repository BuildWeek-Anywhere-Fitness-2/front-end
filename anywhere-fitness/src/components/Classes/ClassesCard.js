import React from "react";
import { Card } from "reactstrap";


export default function ClassesCard({ name, description, start, end }) {
    return (
        <Card>
            <p> {name} </p>
            <p> {description} </p>
            <p> {start} </p>
            <p> {end} </p>
        </Card>

    )
}
