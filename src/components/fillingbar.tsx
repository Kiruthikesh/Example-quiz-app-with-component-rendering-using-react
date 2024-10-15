import { useCallback, useState } from 'react'
import Logo from './logo'
import Question from './questions';
import { Ques } from './questioninterface';

interface fillingbar{
  questions:Ques[]
}

const Fillingbar=({questions}:fillingbar)=>{
    const [range,setRange]=useState<number>(0);
    const [isClicked,setIsClicked]=useState<boolean>(false);
    const [marks,setMarks]=useState<number>(0);

    const handleClick=useCallback((option:string,index:number) => {
      const value=Math.min(range+10,100)
      setRange(value);
      setIsClicked(true)
      if(option==questions[index].a){
        setMarks(marks+10)
      }
      },[marks,range,questions])
    
    return (
        <div className='flex flex-col items-center mt-20 '>
                <Logo />
          <div className='h-10 w-5/12'>
                <div className='w-full h-5 bg-black rounded-full' >
                  <div className='h-full bg-green-600 rounded-full' style={{width:`${range}%`}} >
                  </div>
                </div>
                <div className='flex justify-between px-2 mt-2'>
                <p>Quetions:{(range/10)}/{questions.length}</p>
                <p>Marks:{marks}/100</p>
                </div>

          </div>
          <Question handleClick={handleClick} isClicked={isClicked} questions={questions} setIsClicked={setIsClicked} marks={marks}/>
          

          
          
        </div>
    )
}

export default Fillingbar;