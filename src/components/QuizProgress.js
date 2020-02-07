import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import styled, { css } from 'styled-components';
import colors from '../styles/colors.scss';

const Span = styled.span`
    font-size: 24px;
    font-weight: 500;
    display: block;
    margin-right: 5px;
`;

const QuestionState = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TimerBar = styled.div`
    border: 4px solid ${colors.grey};
    border-radius: 25px;
    height: 30px;
    margin-bottom: 30px;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 0;
        background: linear-gradient(
            90deg,
            rgba(${colors.progressStart}, 1) 0%,
            rgba(${colors.progressEnd}, 1) 100%
        );

        ${props =>
            props.start === 'true' &&
            css`
                transition: width ${props => props.duration || 0}s linear;
                width: 100%;
            `}
    }
`;

const Wrapper = styled.div`
    color: ${colors.comet};
    background-image: linear-gradient(
        to right,
        ${colors.comet} 10%,
        rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 10px 1px;
    background-repeat: repeat-x;
    padding-bottom: 18px;
`;

const QuizProgress = ({ timeLimit, timeValue, resetTimer }) => {
    const timeLimitAdj = timeLimit + 1;
    const { questionIndex, totalQuestions } = useStoreState(state => state);
    const { updateQuestionIndex } = useStoreActions(actions => actions);
    const [seconds, setSeconds] = useState(timeLimitAdj);
    const [isActive, setIsActive] = useState('false');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive('true');
            setSeconds(seconds - 1);
        }, 1000);

        if (timeValue === 0 || seconds === 0) {
            if (seconds === 0) {
                updateQuestionIndex(questionIndex + 1);
            }
            clearTimeout(timer);
            setSeconds(timeLimitAdj);
            setIsActive('false');
            resetTimer();
        }

        return () => {
            clearTimeout(timer);
        };
    }, [
        questionIndex,
        seconds,
        timeLimit,
        updateQuestionIndex,
        timeLimitAdj,
        resetTimer,
        timeValue
    ]);

    return (
        <Wrapper>
            <TimerBar start={isActive} duration={timeLimit} />
            <QuestionState>
                <Span>Question {questionIndex + 1}</Span> / {totalQuestions}
            </QuestionState>
        </Wrapper>
    );
};

export default QuizProgress;
