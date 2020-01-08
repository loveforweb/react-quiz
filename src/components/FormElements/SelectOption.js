import React from 'react';
import PropTypes from 'prop-types';
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

const SelectOption = ({ name, label, options, handleChange }) => {
    return (
        <QuizItem>
            <label htmlFor={name}>{label}</label>
            <select onChange={handleChange} name={name}>
                {name === 'category' ? (
                    <option key={'any'} value={'any'}>
                        Any
                    </option>
                ) : (
                    ''
                )}
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </QuizItem>
    );
};

SelectOption.propTypes = {
    name: PropTypes.string.isRequired
};

export default SelectOption;
