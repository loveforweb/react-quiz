import React, { useEffect, useState } from 'react';
import QuestionList from '../components/QuestionList';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import AnswersList from '../components/AnswersList';
import QuizBuilder from '../components/QuizBuilder';
import Header from '../components/Base/Header';
import Button from '../components/FormElements/Button';
import QuizProgress from '../components/QuizProgress';

const Content = styled.div`
    margin: 10px 0;
`;

const QuizPage = () => {
    const [isComplete, setIsComplete] = useState(false);
    const { questionIndex, quizData, totalQuestions } = useStoreState(
        state => state
    );
    const {
        updateQuestionIndex,
        resetAnswerResult,
        getCategories
    } = useStoreActions(actions => actions);

    const onResetClick = () => {
        setIsComplete(false);
        updateQuestionIndex(0);
        resetAnswerResult();
    };

    useEffect(() => {
        getCategories('https://opentdb.com/api_category.php');
    }, [getCategories]);

    useEffect(() => {
        if (quizData && questionIndex === totalQuestions) {
            setIsComplete(true);
        } else {
            setIsComplete(false);
        }
    }, [questionIndex, quizData, totalQuestions]);

    return (
        <>
            <Header />

            <Content>
                {!quizData && <QuizBuilder />}
                {isComplete && (
                    <>
                        <AnswersList />
                        <Button
                            onClickAction={onResetClick}
                            isDisabled={false}
                            text="Start again"
                        />
                    </>
                )}
                {quizData && quizData.length && !isComplete && <QuestionList />}
            </Content>
        </>
    );
};

export { QuizPage as default };
