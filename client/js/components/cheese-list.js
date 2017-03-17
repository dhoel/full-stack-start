import React from 'react';

export default function CheeseList(props) {
    const cheeses = props.cheese.map((cheese, index) => {
        return <li key={index}>{cheese}</li>
    });
    return (

        <ul>
            { cheeses }
        </ul>
    )
}
