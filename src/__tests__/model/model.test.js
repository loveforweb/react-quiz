import { createStore, action, thunk } from 'easy-peasy';
import model from '../../model/model';
import data from '../../model/data';
import fetch from 'jest-fetch-mock';

describe('Testing model actions', () => {
    test('setQuizData action', () => {
        const store = createStore(model);
        store.getActions().setQuizData(data.results);
        expect(store.getState().quizData).toEqual(data.results);
    });

    test('setCategories action', () => {
        const categories = [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' }
        ];
        const store = createStore(model);
        store.getActions().setCategories(categories);
        expect(store.getState().quizCategories).toEqual(categories);
    });

    test('setTotalQuestion action', () => {
        const store = createStore(model);
        const amount = 5;
        store.getActions().setTotalQuestion(amount);
        expect(store.getState().totalQuestions).toEqual(amount);
    });

    test('updateQuestionIndex action', () => {
        const store = createStore(model);
        const count = 5;
        store.getActions().updateQuestionIndex(count);
        expect(store.getState().questionIndex).toEqual(count);
    });

    test('updateQuizData action', () => {
        const { results } = data;
        const updatedContent = {
            is_correct: true,
            selected_answer: '140',
            index: 2,
            option: 1
        };

        const newData = {
            ...results[updatedContent.index],
            ...updatedContent
        };

        const store = createStore(model);
        store.getActions().setQuizData(data.results);
        store.getActions().updateQuizData(updatedContent);

        expect(store.getState().quizData[updatedContent.index]).toEqual(
            newData
        );
    });

    test('resetAnswerResult action', () => {
        const { results } = data;
        const updatedContent = {
            is_correct: true,
            selected_answer: '140',
            index: 2,
            option: 1
        };

        const newData = {
            ...results[updatedContent.index],
            ...updatedContent
        };

        const store = createStore(model);
        store.getActions().setQuizData(data.results);
        store.getActions().updateQuizData(updatedContent);

        expect(store.getState().quizData[updatedContent.index]).toEqual(
            newData
        );

        // Rest
        store.getActions().resetAnswerResult();

        expect(store.getState().quizData).toBeNull();
        expect(store.getState().totalQuestions).toBeNull();
    });
});
