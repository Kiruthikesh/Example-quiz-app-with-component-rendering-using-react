
import Questions from '../components/questions';

const sampleQuestions = [
    {
        q:"question 1",
        o:["hi","hello","hey","how"],
        a:"hi"
      },{
        q:"question 2",
        o:["hi","hello","hey","how"],
        a:"hello"
      },{
        q:"question 3",
        o:["hi","hello","hey","how"],
        a:"hey"
      },{
        q:"question 4",
        o:["hi","hello","hey","how"],
        a:"how"
      },{
        q:"question 5",
        o:["hi","hello","hey","how"],
        a:"hi"
      },{
        q:"question 6",
        o:["hi","hello","hey","how"],
        a:"hello"
      },{
        q:"question 7",
        o:["hi","hello","hey","how"],
        a:"hey"
      },{
        q:"question 8",
        o:["hi","hello","hey","how"],
        a:"how"
      },{
        q:"question 9",
        o:["hi","hello","hey","how"],
        a:"hi"
      },{
        q:"question 10",
        o:["hi","hello","hey","how"],
        a:"hello"
      }
];

export default {
    title: 'Questions',
    component: Questions,
};

const Template = (args) => <Questions {...args} />;

export const Default = Template.bind({});
Default.args = {
    handleClick: (option, index) => console.log(`Selected option: ${option} for question ${index}`),
    isClicked: false,
    questions: sampleQuestions,
    setIsClicked: (value) => console.log(`isClicked set to: ${value}`),
    marks: 0,
};

export const QuestionClicked = Template.bind({});
QuestionClicked.args = {
    handleClick: (option, index) => console.log(`Selected option: ${option} for question ${index}`),
    isClicked: true,
    questions: sampleQuestions,
    setIsClicked: (value) => console.log(`isClicked set to: ${value}`),
    marks: 10,
};


export const LastQuestion = Template.bind({});
LastQuestion.args = {
    handleClick: (option, index) => console.log(`Selected option: ${option} for question ${index}`),
    isClicked: false,
    questions: [
        { q: 'What is the capital of Germany?', o: ['Berlin', 'Vienna', 'Bern', 'Amsterdam'], a: 'Berlin' },
    ],
    setIsClicked: (value) => console.log(`isClicked set to: ${value}`),
    marks: 50,
};
