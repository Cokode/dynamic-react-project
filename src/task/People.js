import React from "react";
//import './People.css';
import Person from "./Person";

const people = [
    {
        id: 1,
        name : "collins",
        age : 54,
        applicant : false,
    },

    {
        id: 2,
        name : "Frank",
        age : 44,
        applicant : true,
    },

    {
        id: 2,
        name : "Frank",
        age : 44,
        applicant : true,
    },

    {
        id: 2,
        name : "Frank",
        age : 44,
        applicant : true,
    },
];

export default function People () {
    
    return (
       <div className="People-things">
        {people.map((person) => (
            <Person
                key = {person.id}
                name = {person.name}
                age = {person.age}
                applicant = {person.applicant ? "true" : "false"}
            />
            ))}           
       </div>
    )
}
