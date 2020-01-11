import React, { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import colors from '../styles/colors.scss';
import RadioOption from './FormElements/RadioOption';
import Button from './FormElements/Button';

const Option = styled.div`
    border: 4px solid ${colors.kashmirBlue};
    border-radius: 22px;
    margin-bottom: 15px;
    height: 50px;
    overflow: hidden;
`;

const Question = ({ questions }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [answer, setAnswer] = useState({});
    const [guid, setGuid] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const { questionIndex } = useStoreState(state => state);
    const { updateQuestionIndex, updateQuizData } = useStoreActions(
        actions => actions
    );

    useEffect(() => {
        setGuid(uuid());
        return () => {
            console.log('clean up Question');
            setIsDisabled(true);
        };
    }, [questionIndex, questions]);

    const onAnswerClick = e => {
        setAnswer({
            is_correct: e.target.id === questions.correct_answer ? true : false,
            selected_answer: e.target.id,
            index: questionIndex,
            option: e.target.value
        });

        setIsChecked(+e.target.value);
        setIsDisabled(false);
    };

    const onNextButtonClick = () => {
        updateQuestionIndex(questionIndex + 1);
        updateQuizData(answer);
        setIsChecked(false);
    };

    return (
        <div>
            {/* create id so radio options are one group  */}
            {questions.combined_answers.map((answer, i) => {
                return (
                    <React.Fragment key={i}>
                        <Option>
                            <RadioOption
                                name={answer}
                                hoverClass="hvr-bounce-to-right"
                                handleChange={onAnswerClick}
                                value={i}
                                label={answer}
                                id={guid}
                                isChecked={isChecked === i ? true : false}
                            />
                        </Option>
                    </React.Fragment>
                );
            })}
            <Button
                onClickAction={onNextButtonClick}
                isDisabled={isDisabled}
                text="Next"
            />
        </div>
    );
};

export default Question;
