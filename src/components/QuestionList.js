import React from 'react';
import { useStoreState } from 'easy-peasy';
import Question from './Question';
import styled from 'styled-components';

const Heading = styled.h2`
    font-size: 24px;
`;

const QuestionList = () => {
    const { currentQuestion, quizData } = useStoreState(state => state);

    return (
        <div>
            {quizData[currentQuestion] && (
                <div>
                    <Heading>{quizData[currentQuestion].question}</Heading>
                    <Question questions={quizData[currentQuestion]} />
                </div>
            )}
        </div>
    );
};

export { QuestionList as default };
