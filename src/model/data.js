const questions = {
    results: [
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?',
            correct_answer: 'Demolition',
            incorrect_answers: [
                'The Dream Team',
                'The Bushwhackers',
                'The British Bulldogs'
            ]
        },
        {
            category: 'Entertainment: Video Games',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'Which of these video game engines was made by the company Epic Games?',
            correct_answer: 'Unreal',
            incorrect_answers: ['Unity', 'Game Maker: Studio', 'Cry Engine']
        },
        {
            category: 'Politics',
            type: 'multiple',
            difficulty: 'easy',
            question: 'The largest consumer market in 2015 was...',
            correct_answer: 'The United States of America',
            incorrect_answers: ['Germany', 'Japan', 'United Kingdom']
        },
        {
            category: 'Entertainment: Television',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'On the show &quot;Rick and Morty&quot;, in episode &quot;Total Rickall&quot;, who was a parasite?',
            correct_answer: 'Pencilvester',
            incorrect_answers: [
                'Beth Smith',
                'Summer Smith',
                'Mr. Poopy Butthole'
            ]
        },
        {
            category: 'Entertainment: Television',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'In DuckTales, what is the name of the city where all the main characters live?',
            correct_answer: 'Duckburg',
            incorrect_answers: ['Duckwing', 'Tailspin', 'Wingford']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;',
            correct_answer: 'Print',
            incorrect_answers: ['Digest', 'Look', 'Read']
        },
        {
            category: 'Entertainment: Video Games',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'Which character in the &quot;Animal Crossing&quot; series uses the phrase &quot;zip zoom&quot; when talking to the player?',
            correct_answer: 'Scoot',
            incorrect_answers: ['Drake', 'Bill', 'Mallary']
        },
        {
            category: 'General Knowledge',
            type: 'multiple',
            difficulty: 'easy',
            question: 'In which fast food chain can you order a Jamocha Shake?',
            correct_answer: 'Arby&#039;s',
            incorrect_answers: [
                'McDonald&#039;s',
                'Burger King',
                'Wendy&#039;s'
            ]
        },
        {
            category: 'Entertainment: Video Games',
            type: 'multiple',
            difficulty: 'easy',
            question: 'Which of the following is NOT a Nintendo game console?',
            correct_answer: 'Dreamcast',
            incorrect_answers: ['SNES', 'Wii', 'Switch']
        },
        {
            category: 'Science & Nature',
            type: 'multiple',
            difficulty: 'easy',
            question:
                'What is the official name of the star located closest to the North Celestial Pole?',
            correct_answer: 'Polaris',
            incorrect_answers: ['Eridanus', 'Gamma Cephei', 'Iota Cephei']
        }
    ]
};

const categories = {
    trivia_categories: [
        { id: 9, name: 'General Knowledge' },
        { id: 10, name: 'Entertainment: Books' },
        { id: 11, name: 'Entertainment: Film' },
        { id: 12, name: 'Entertainment: Music' },
        { id: 13, name: 'Entertainment: Musicals & Theatres' },
        { id: 14, name: 'Entertainment: Television' },
        { id: 15, name: 'Entertainment: Video Games' },
        { id: 16, name: 'Entertainment: Board Games' },
        { id: 17, name: 'Science & Nature' },
        { id: 18, name: 'Science: Computers' },
        { id: 19, name: 'Science: Mathematics' },
        { id: 20, name: 'Mythology' },
        { id: 21, name: 'Sports' },
        { id: 22, name: 'Geography' },
        { id: 23, name: 'History' },
        { id: 24, name: 'Politics' },
        { id: 25, name: 'Art' },
        { id: 26, name: 'Celebrities' },
        { id: 27, name: 'Animals' },
        { id: 28, name: 'Vehicles' },
        { id: 29, name: 'Entertainment: Comics' },
        { id: 30, name: 'Science: Gadgets' },
        { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
        { id: 32, name: 'Entertainment: Cartoon & Animations' }
    ]
};

export { questions, categories };
