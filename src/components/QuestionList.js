import React from 'react';
import { useStoreState } from 'easy-peasy';
import Question from './Question';
import dompurify from 'dompurify';
import styled from 'styled-components';

const sanitizer = dompurify.sanitize;

const Heading = styled.h2`
    font-size: 24px;
`;

const QuestionList = () => {
    const { questionIndex, quizData, totalQuestions } = useStoreState(
        state => state
    );

    return (
        <div>
            <p>
                Question {questionIndex + 1} / {totalQuestions}
            </p>
            {quizData[questionIndex] && (
                <div>
                    <Heading>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                    quizData[questionIndex].question
                                )
                            }}
                        />
                    </Heading>
                    <Question questions={quizData[questionIndex]} />
                </div>
            )}
        </div>
    );
};

export { QuestionList as default };
