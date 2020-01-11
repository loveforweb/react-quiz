import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import styled from 'styled-components';
import queryString from 'query-string';
import { difficultyOptions, typeOptions } from '../auxiliary/default-options';
import SelectOption from './FormElements/SelectOption';
import InputField from './FormElements/InputField';
import Button from './FormElements/Button';
import breakpoint from '../styles/breakpoints.scss';

const QuizWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const QuizBuilder = () => {
    const { quizCategories } = useStoreState(state => state);
    const { getQuestions, setTotalQuestion } = useStoreActions(
        actions => actions
    );
    const [category, setCategory] = useState();
    const [amount, setAmount] = useState(10);
    const [type, setType] = useState('multiple');
    const [difficulty, setDifficulty] = useState('easy');

    useEffect(() => {
        return () => {
            console.log('cleanup QuizBuilder');
        };
    }, []);

    const handleGetQuestions = () => {
        let urlParams = { amount, type, difficulty };

        if (category) {
            urlParams = { ...urlParams, category };
        }

        setTotalQuestion(amount);
        if (urlParams) {
            getQuestions(queryString.stringify(urlParams));
        } else {
            getQuestions('amount=10&difficulty=easy&type=boolean');
        }
    };

    const handleChange = e => {
        if (e.target.name === 'amount') {
            setAmount(+e.target.value);
        }

        if (e.target.name === 'category') {
            if (e.target.value === 'any') {
                setCategory('');
            } else {
                setCategory(e.target.value);
            }
        }

        if (e.target.name === 'type') {
            setType(e.target.value);
        }

        if (e.target.name === 'difficult') {
            setDifficulty(e.target.value);
        }
    };

    if (!quizCategories.length) {
        return <div>loading</div>;
    }

    return (
        <QuizWrapper>
            <SelectOption
                options={quizCategories}
                handleChange={handleChange}
                name="category"
                label="Category"
            />
            <SelectOption
                options={difficultyOptions}
                handleChange={handleChange}
                name="difficulty"
                label="Difficulty"
            />
            <SelectOption
                options={typeOptions}
                handleChange={handleChange}
                name="type"
                label="Type"
            />
            <InputField
                inputValue={amount}
                name="amount"
                type="number"
                handleChange={handleChange}
                label="Number of questions"
            />
            <Button
                onClickAction={handleGetQuestions}
                text="Generate Questions"
                isGenerate={true}
            />
        </QuizWrapper>
    );
};

export { QuizBuilder as default };
