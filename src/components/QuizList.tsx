export interface IQuizList {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  answer: string;
}
export const QuizList: IQuizList[] = [
  {
    id: '1',
    question: 'What color is the sky?',
    optionA: 'Green',
    optionB: 'Blue',
    optionC: 'Red',
    optionD: 'Yellow',
    answer: 'optionB',
  },
  {
    id: '2',
    question: 'How many legs does a dog have?',
    optionA: '2',
    optionB: '6',
    optionC: '4',
    optionD: '3',
    answer: 'optionC',
  },
  {
    id: '3',
    question: 'What do we drink when we are thirsty?',
    optionA: 'Milk',
    optionB: 'Juice',
    optionC: 'Water',
    optionD: 'Oil',
    answer: 'optionC',
  },
  {
    id: '4',
    question: "Which animal says 'meow'?",
    optionA: 'Dog',
    optionB: 'Cow',
    optionC: 'Cat',
    optionD: 'Sheep',
    answer: 'optionC',
  },
  {
    id: '5',
    question: 'How many fingers do we have on one hand?',
    optionA: '3',
    optionB: '4',
    optionC: '5',
    optionD: '6',
    answer: 'optionC',
  },
];
