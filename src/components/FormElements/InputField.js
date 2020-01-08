import React from 'react';
import styled from 'styled-components';

const QuizItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    label {
        margin-right: 1rem;
        margin-bottom: 0;
        min-width: 15rem;
        display: flex;
        align-items: center;
    }
`;

const InputField = props => {
    return (
        <QuizItem>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                onChange={props.handleChange}
                name={props.name}
                value={props.inputValue}
                type={props.type}
                min={props.amount}
                max="100"
            />
        </QuizItem>
    );
};

export default InputField;
