import React, { useEffect, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import Answers from './Answers';

const AnswersList = () => {
    const { quizData, totalQuestions } = useStoreState(state => state);
    const [answerCount, setAnswerCount] = useState(0);

    useEffect(() => {
        const correctTotal = quizData.filter(question => {
            return question.is_correct;
        });

        setAnswerCount(correctTotal.length);
    }, [quizData]);

    return (
        <div>
            <p>
                You answered {answerCount} out of {totalQuestions} correctly
            </p>
            {quizData.map((questionData, i) => {
                return (
                    <Answers
                        key={i}
                        question={questionData.question}
                        combinedAns={questionData.combined_answers}
                        correctAns={questionData.correct_answer}
                        selectedAns={questionData.selected_answer}
                    />
                );
            })}
        </div>
    );
};

export { AnswersList as default };
