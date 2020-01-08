import { action, debug, thunk } from 'easy-peasy';

const model = {
    currentQuestion: 0,
    answerCount: 0,
    quizData: null,
    quizCategories: [],

    setQuizData: action((state, payload) => {
        state.quizData = payload;
    }),

    setCategories: action((state, payload) => {
        state.quizCategories = payload;
    }),

    updateQuestionCount: action((state, count) => {
        state.currentQuestion = count;
    }),

    updateQuizData: action((state, payload) => {
        state.quizData[payload.index] = {
            ...state.quizData[payload.index],
            ...payload
        };
    }),

    resetAnswerResult: action(state => {
        state.quizData = [];
    }),

    getCategories: thunk(async (actions, url) => {
        const sortItems = responseData => {
            return responseData.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        };
        const response = await fetch(url);
        const categories = await response.json();

        actions.setCategories(sortItems(categories.trivia_categories));
    }),

    getQuestions: thunk(async (actions, params) => {
        const response = await fetch(`https://opentdb.com/api.php?${params}`);
        const questions = await response.json();

        const quizData = questions.results.map(result => {
            result.combined_answers = [
                result.correct_answer,
                ...result.incorrect_answers
            ].sort(() => Math.random() - 0.5);
            result.is_correct = false;
            result.selected_answer = null;
            return result;
        });

        actions.setQuizData(quizData);
    })
};

export { model as default };
