import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import QuizPage from './pages/QuizPage';
import * as serviceWorker from './serviceWorker';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './model/model';
import styled from 'styled-components';

const PageWrapper = styled.div`
    max-width: 1440px;
    padding: 0 24px;
`;

const store = createStore(model);

ReactDOM.render(
    <StoreProvider store={store}>
        <PageWrapper>
            <QuizPage />
        </PageWrapper>
    </StoreProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
