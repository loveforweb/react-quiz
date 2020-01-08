import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Question = ({ questions }) => {
    const { currentQuestion } = useStoreState(state => state);
    const { updateQuestionCount, updateQuizData } = useStoreActions(
        actions => actions
    );

    useEffect(() => {
        return () => {
            console.log('clean up');
        };
    }, []);

    const onButtonClick = e => {
        updateQuestionCount(currentQuestion + 1);
        updateQuizData({
            is_correct:
                e.target.innerHTML === questions.correct_answer ? true : false,
            selected_answer: e.target.innerHTML,
            index: currentQuestion,
            option: e.target.getAttribute('data-option')
        });
    };

    return (
        <div>
            {questions.combined_answers.map((answer, i) => {
                return (
                    <React.Fragment key={i}>
                        <button onClick={onButtonClick} data-option={i}>
                            {answer}
                        </button>
                        <br />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Question;
