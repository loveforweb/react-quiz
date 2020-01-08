import React from 'react';

const Answers = ({ question, combinedAns, correctAns, selectedAns }) => {
    return (
        <div>
            {question}
            {combinedAns.map(ans => {
                let isCorrect = ans === correctAns;
                let userCorrect = ans === selectedAns;
                return (
                    <div
                        className={`${userCorrect ? 'selected' : ''} ${
                            isCorrect ? 'correct' : ''
                        }`}
                    >
                        {ans}
                    </div>
                );
            })}
        </div>
    );
};

export { Answers as default };
