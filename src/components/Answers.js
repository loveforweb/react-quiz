import React from 'react';
import styled, { css } from 'styled-components';
import dompurify from 'dompurify';
import colors from '../styles/colors.scss';

const sanitizer = dompurify.sanitize;

const Heading = styled.h2`
    font-size: 24px;
`;

const AnswerContainer = styled.div`
    margin-bottom: 10px;
`;

const AnswerItem = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    padding: 4px;
    margin-bottom: 6px;

    ${css`
        &.selected {
            background-color: blue;
        }
    `}

    ${props =>
        props.answer === 'correct' &&
        css`
            background-color: ${colors.successGreen};
            color: ${colors.white};
        `}
    ${props =>
        props.answer === 'incorrect' &&
        css`
            background-color: ${colors.errorRed};
            color: ${colors.white};
        `}
`;

const Answers = ({ question, combinedAns, correctAns, selectedAns }) => {
    return (
        <AnswerContainer>
            <Heading>
                <span
                    dangerouslySetInnerHTML={{
                        __html: sanitizer(question)
                    }}
                />
            </Heading>
            {combinedAns.map((ans, i) => {
                let correct = correctAns === selectedAns;
                let item;

                if (correct) {
                    if (ans === correctAns) {
                        item = 'correct';
                    }
                } else {
                    if (ans === selectedAns) {
                        item = 'incorrect';
                    }
                }

                console.log(item);
                return (
                    <AnswerItem
                        key={i}
                        answer={item}
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(ans)
                        }}
                    />
                );
            })}
        </AnswerContainer>
    );
};

export { Answers as default };
