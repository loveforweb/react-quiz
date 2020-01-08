import { action, debug } from 'easy-peasy';

const model = {
    currentQuestion: 0,
    answerCount: 0,
    quizData: null,
    setData: action((state, data) => {
        state.quizData = data.results;
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
        const newState = [];
        state.quizData.map(questions => {
            const updatedObj = {
                ...questions,
                is_correct: false,
                selected_answer: null
            };

            delete updatedObj.index;
            delete updatedObj.option;

            return newState.push(updatedObj);
        });

        state.quizData = newState;
    })
};

export { model as default };
