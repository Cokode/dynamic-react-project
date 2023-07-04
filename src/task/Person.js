import React from "react";

export default function Person (props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h3>applicant: {props.applicant}</h3>
        </div>
    )
}