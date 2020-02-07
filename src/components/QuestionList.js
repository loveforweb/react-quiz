import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import Question from './Question';
import dompurify from 'dompurify';
import styled from 'styled-components';
import QuizProgress from './QuizProgress';

const sanitizer = dompurify.sanitize;

const QuestionHeading = styled.h2`
    font-size: 24px;
    line-height: 1.5;
`;

const QuestionList = () => {
    const { questionIndex, quizData } = useStoreState(state => state);

    const [timeValue, setTimeValue] = useState(10);
    const timeLimit = 10;

    const clearTimer = () => {
        setTimeValue(0);
    };

    const resetTimer = () => {
        setTimeValue(timeLimit);
    };

    return (
        <>
            {quizData[questionIndex] && (
                <div>
                    <QuizProgress
                        timeLimit={timeLimit}
                        timeValue={timeValue}
                        resetTimer={resetTimer}
                    />
                    <QuestionHeading>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                    quizData[questionIndex].question
                                )
                            }}
                        />
                    </QuestionHeading>
                    <Question
                        questions={quizData[questionIndex]}
                        clearTimer={clearTimer}
                    />
                </div>
            )}
        </>
    );
};

export { QuestionList as default };
