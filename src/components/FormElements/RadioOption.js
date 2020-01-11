import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dompurify from 'dompurify';
import colors from '../../styles/colors.scss';
import breakpoint from '../../styles/breakpoints.scss';

const QuizItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    position: relative;
    height: 100%;

    @media ${breakpoint.tablet} {
        flex-direction: row;
    }

    label {
        width: 100%;
        height: 100%;
        display: flex;
        padding-left: 15px;
        align-items: center;
    }

    input {
        position: absolute;
        left: -9999px;
        height: 0px;
        width: 0px;
        opacity: 0;

        &:focus {
            & ~ label {
                background: ${colors.selectedBlue};
            }
        }

        &:checked ~ label {
            background: ${colors.selectedBlue};

            & ~ span {
                opacity: 1;
                transition: opacity 0.25s ease-in-out;
            }
        }
    }
`;

const Selected = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: ${colors.kashmirBlue};
    opacity: 0;

    &:after {
        content: '';
        display: block;
        width: 4px;
        height: 8px;
        border: solid ${colors.white};
        border-width: 0 2px 2px 0;
        position: absolute;
        right: 12px;
        margin-top: -2px;
        top: 50%;
        transform: rotate(45deg) translateY(-50%);
    }
`;

const sanitizer = dompurify.sanitize;

const RadioOption = ({
    id,
    value,
    name,
    hoverClass,
    label,
    handleChange,
    isChecked
}) => {
    const handleOnChange = e => {
        handleChange(e);
    };

    return (
        <QuizItem>
            <input
                onChange={handleOnChange}
                name={id}
                value={value}
                type="radio"
                id={name}
                checked={isChecked}
            />
            <label
                dangerouslySetInnerHTML={{ __html: sanitizer(label) }}
                htmlFor={name}
                className={hoverClass}
            />
            <Selected />
        </QuizItem>
    );
};

RadioOption.propTypes = {
    name: PropTypes.string.isRequired
};

export default RadioOption;
