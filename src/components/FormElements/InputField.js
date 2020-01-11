import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints.scss';

const QuizItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    @media ${breakpoint.tablet} {
        flex-direction: row;
    }

    label {
        margin-right: 1rem;
        margin-bottom: 6px;
        min-width: 15rem;
        display: flex;
        align-items: center;

        @media ${breakpoint.tablet} {
            margin-bottom: 0;
        }
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
