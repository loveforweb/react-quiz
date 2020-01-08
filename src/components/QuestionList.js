import React from 'react';
import { useStoreState } from 'easy-peasy';
import Question from './Question';

const QuestionList = () => {
    const { currentQuestion, quizData } = useStoreState(state => state);

    return (
        <div>
            {quizData[currentQuestion] && (
                <div>
                    <h2>{quizData[currentQuestion].question}</h2>
                    <Question questions={quizData[currentQuestion]} />;
                </div>
            )}
        </div>
    );
};

export { QuestionList as default };
