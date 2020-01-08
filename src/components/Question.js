import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import dompurify from 'dompurify';
import styled from 'styled-components';

const sanitizer = dompurify.sanitize;

const Option = styled.div`
    border: 1px solid grey;
    border-radius: 2px;
    margin-bottom: 2px;
`;

const Button = styled.button`
    border: none;
    width: 100%;
    text-align: left;
    padding: 4px;
    background: none;
    background-color: white;
    -webkit-appearance: none;
`;

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
                        <Option>
                            <Button
                                onClick={onButtonClick}
                                data-option={i}
                                dangerouslySetInnerHTML={{
                                    __html: sanitizer(answer)
                                }}
                            />
                        </Option>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Question;
