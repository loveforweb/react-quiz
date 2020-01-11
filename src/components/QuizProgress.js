import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import styled from 'styled-components';
import colors from '../styles/colors.scss';

const Span = styled.span`
    font-size: 24px;
    font-weight: 500;
    display: block;
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
        width: ${props => props.timer || 0}%;
        background: linear-gradient(
            90deg,
            rgba(${colors.progressStart}, 1) 0%,
            rgba(${colors.progressEnd}, 1) 100%
        );
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

const QuizProgress = ({ timeLimit }) => {
    const { questionIndex, totalQuestions } = useStoreState(state => state);
    const { updateQuestionIndex } = useStoreActions(actions => actions);
    const [timeLeft, setTimeLeft] = useState(1);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        console.log(timeLeft);
        if (timeLeft - 2 === timeLimit) {
            console.log('reset');
            setTimeLeft(1);
            updateQuestionIndex(questionIndex + 1);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft + 1);
            setPerc(timeLeft * 10);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [timeLeft, timeLimit, questionIndex, updateQuestionIndex]);

    return (
        <Wrapper>
            {/* <Span>Question {questionIndex + 1}</Span> / {totalQuestions} */}
            <TimerBar timer={perc} />
            <Span>Question 10</Span> / 1
        </Wrapper>
    );
};

export default QuizProgress;
