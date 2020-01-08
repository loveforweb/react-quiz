import React, { useEffect, useState } from 'react';
import QuestionList from '../components/QuestionList';
import { useStoreActions, useStoreState } from 'easy-peasy';
import AnswersList from '../components/AnswersList';
import QuizBuilder from '../components/QuizBuilder';

const QuizPage = () => {
    const [isComplete, setIsComplete] = useState(false);
    const { currentQuestion, quizData } = useStoreState(state => state);
    const {
        updateQuestionCount,
        resetAnswerResult,
        getCategories
    } = useStoreActions(actions => actions);

    const onResetClick = () => {
        setIsComplete(false);
        updateQuestionCount(0);
        resetAnswerResult();
    };

    useEffect(() => {
        getCategories('https://opentdb.com/api_category.php');
    }, [getCategories]);

    useEffect(() => {
        if (quizData && currentQuestion === quizData.length) {
            console.log('is compete');
            setIsComplete(true);
        }
        return () => {
            setIsComplete(false);
        };
    }, [currentQuestion, quizData]);

    if (!quizData) {
        return <QuizBuilder />;
    }

    if (isComplete) {
        return (
            <div>
                <AnswersList />
                <button onClick={onResetClick}>Start again</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Quiz page</h1>
            <QuestionList />
        </div>
    );
};

export { QuizPage as default };
