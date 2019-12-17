const model = {
  results: [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100']
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'medium',
      question: 'The name of technology company HP stands for what?',
      correct_answer: 'Hewlett-Packard',
      incorrect_answers: ['Howard Packmann', 'Husker-Pollosk', 'Hellman-Pohl']
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What mytological creatures have women&#039;s faces and vultures&#039; bodies?',
      correct_answer: 'Harpies',
      incorrect_answers: ['Mermaids', 'Nymph', 'Lilith']
    }
  ]
};

export { model as default };
