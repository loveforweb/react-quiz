import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 24px;
`;

const Header = () => {
    return (
        <header>
            <Heading>Trivia Quiz</Heading>
        </header>
    );
};

export default Header;
