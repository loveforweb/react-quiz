import { action, debug, thunk } from 'easy-peasy';

const model = {
    questionIndex: 0,
    totalQuestions: null,
    quizData: null,
    quizCategories: [],

    setQuizData: action((state, payload) => {
        state.quizData = payload;
    }),

    setCategories: action((state, payload) => {
        state.quizCategories = payload;
    }),

    setTotalQuestion: action((state, payload) => {
        state.totalQuestions = payload;
    }),

    updateQuestionIndex: action((state, count) => {
        state.questionIndex = count;
    }),

    updateQuizData: action((state, payload) => {
        state.quizData[payload.index] = {
            ...state.quizData[payload.index],
            ...payload
        };
    }),

    resetAnswerResult: action(state => {
        state.quizData = null;
        state.totalQuestions = null;
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

        try {
            const response = await fetch(url);
            const categories = await response.json();

            return actions.setCategories(
                sortItems(categories.trivia_categories)
            );
        } catch (error) {}
    }),

    getQuestions: thunk(async (actions, params) => {
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?${params}`
            );
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

            return actions.setQuizData(quizData);
        } catch (error) {}
    })
};

export { model as default };
