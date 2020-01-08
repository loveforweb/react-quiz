import React from 'react';
import styled from 'styled-components';

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
`;

const Answers = ({ question, combinedAns, correctAns, selectedAns }) => {
    return (
        <AnswerContainer>
            <Heading>{question}</Heading>
            {combinedAns.map((ans, i) => {
                let isCorrect = ans === correctAns;
                let userCorrect = ans === selectedAns;
                return (
                    <AnswerItem
                        key={i}
                        className={`${userCorrect ? 'selected' : ''} ${
                            isCorrect ? 'correct' : ''
                        }`}
                    >
                        {ans}
                    </AnswerItem>
                );
            })}
        </AnswerContainer>
    );
};

export { Answers as default };
