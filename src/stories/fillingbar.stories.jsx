
import Fillingbar from '../components/fillingbar';

// Sample questions for the trivia game
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
    title: 'Fillingbar',
    component: Fillingbar,
};


const Template = (args) => <Fillingbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    questions: sampleQuestions,
};

export const InitialState = Template.bind({});
InitialState.args = {
    questions: [{
        q:"question 1",
        o:["hi","hello","hey","how"],
        a:"hi"
    },{
            q:"question 2",
            o:["hi","hello","hey","how"],
            a:"hello"
          }  
    ],
};

export const QuestionsAnsweredCorrectly = Template.bind({});
QuestionsAnsweredCorrectly.args = {
    questions: sampleQuestions,
    initialMarks: 30, 
    range: 30,
};

export const MaxProgress = Template.bind({});
MaxProgress.args = {
    questions: sampleQuestions,
    initialMarks: 100,
    range: 100, 
};

export const QuestionsAnsweredIncorrectly = Template.bind({});
QuestionsAnsweredIncorrectly.args = {
    questions: sampleQuestions,
    initialMarks: 0, 
    range: 10, 
};
