import Startingpage from './components/startingpage'
import { useState } from 'react';
import Fillingbar from './components/fillingbar'
import { Ques } from './components/questioninterface';


const App=()=>{

    const questions:Ques[]=[{
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
    }]

  const [load,setLoad]=useState<boolean>(false)

  const handleClick=()=>{
    setLoad(true)
  }
  let content;
  if(load){
    content=<Fillingbar questions={questions}/>
  }else{
    content=<Startingpage handleClick={handleClick}/>
  }

  return (
    <div className="bg-gray-700 w-full h-screen fixed">
      {<Startingpage handleClick={handleClick}/> && content}
          
    
    
    </div>

    
  )
}

export default App;