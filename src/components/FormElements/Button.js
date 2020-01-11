import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../styles/colors.scss';
import breakpoint from '../../styles/breakpoints.scss';

const ButtonStyle = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    background: ${colors.selectedBlue};
    height: 50px;
    border-radius: 25px;
    width: 150px;

    &:hover,
    &:focus {
        opacity: 0.7;
        transition: opacity 0.25s ease-in-out;
    }

    &[disabled] {
        opacity: 0.5;
    }

    ${props =>
        props.isGenerate &&
        css`
            color: ${colors.white};
            display: flex;
            justify-content: center;
            width: auto;

            @media ${breakpoint.tablet} {
                margin-left: 16rem;
                width: 200px;
            }
        `}
`;

const Button = ({ onClickAction, isDisabled, text, isGenerate }) => {
    return (
        <ButtonStyle
            onClick={onClickAction}
            disabled={isDisabled}
            isGenerate={isGenerate}
        >
            {text}
        </ButtonStyle>
    );
};

export default Button;
