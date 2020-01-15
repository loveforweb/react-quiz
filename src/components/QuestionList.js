import React from 'react';
import { useStoreState } from 'easy-peasy';
import Question from './Question';
import dompurify from 'dompurify';
import styled from 'styled-components';

const sanitizer = dompurify.sanitize;

const QuestionHeading = styled.h2`
    font-size: 24px;
    line-height: 1.5;
`;

const QuestionList = () => {
    const { questionIndex, quizData } = useStoreState(state => state);

    return (
        <>
            {quizData[questionIndex] && (
                <div>
                    <QuestionHeading>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                    quizData[questionIndex].question
                                )
                            }}
                        />
                    </QuestionHeading>
                    <Question questions={quizData[questionIndex]} />
                </div>
            )}
        </>
    );
};

export { QuestionList as default };
