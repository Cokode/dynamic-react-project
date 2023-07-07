import React from 'react';
//import './Task.css';
import styled from 'styled-components';

const TaskWrapper = styled.div`
    background: brown;
    padding: 17px;
    padding-left: 27px;
    border-radius: 15px;
    margin: 5% 5% 5% 5%`
    ;

const Title = styled.h3`
    width: 80%;
    margin: 0;
`;

const Body = styled.p`
    color : white;
    `;
    
export default function Task({id, title, body, onDragStart}) {
    return ( 
        <TaskWrapper
            draggable
            onDragStart={(e) => onDragStart(e, id)}>
                <Title>{title}</Title>
                <Body>{body}</Body>
        </TaskWrapper>     // </div>
    ) 
}