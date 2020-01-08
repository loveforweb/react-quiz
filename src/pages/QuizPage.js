import React, { useEffect, useState } from 'react';
import QuestionList from '../components/QuestionList';
import data from '../model/data';
import { useStoreActions, useStoreState } from 'easy-peasy';
import AnswersList from '../components/AnswersList';

const QuizPage = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [dataSaved, setDataSaved] = useState(false);
    const { currentQuestion, quizData } = useStoreState(state => state);
    const { updateQuestionCount, resetAnswerResult, setData } = useStoreActions(
        actions => actions
    );

    const onResetClick = () => {
        setIsComplete(false);
        updateQuestionCount(0);
        resetAnswerResult();
    };

    useEffect(() => {
        if (quizData && currentQuestion === quizData.length) {
            setIsComplete(true);
        }
    }, [currentQuestion, quizData]);

    useEffect(() => {
        if (data.results.length) {
            data.results.map(result => {
                result.combined_answers = [
                    result.correct_answer,
                    ...result.incorrect_answers
                ].sort(() => Math.random() - 0.5);

                result.is_correct = false;
                result.selected_answer = null;

                return result;
            });

            setData(data);
            setDataSaved(true);
        }
    }, [setData]);

    if (!dataSaved) {
        return <div>Loading...</div>;
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
