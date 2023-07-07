import React from "react";
import styled from 'styled-components';

const PeopleWrapper = styled.div`
    background-color: darkGrey;
    margin-bottom: 2%;
    margin-top: 1%;
    margin-left: 2%;
    max-width: 250px;
    padding: 1%;
    border-radius: 20px;
`;

const InfoWrapper = styled.h2`
    padding: 0%;
    color: brown;
    margin: 1%;
    font-style: italic;
    font-align: left:
    font-family: 'Courier New', Courier, monospace;
`;

export default function Person (props) {
    return (
        <PeopleWrapper>
            <InfoWrapper>Name: {props.name}.</InfoWrapper>
            <InfoWrapper>Age: {props.age}</InfoWrapper>
            <InfoWrapper>applicant: {props.applicant}</InfoWrapper>
        </PeopleWrapper>
    )
}