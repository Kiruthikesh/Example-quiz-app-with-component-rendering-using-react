import { useState,useEffect ,useRef,useCallback} from "react"
import './question.css'
import Countdown from "react-countdown"
import { Ques } from './questioninterface';

interface Queschildren{
    handleClick:(option:string,index:number)=>void;
    isClicked:boolean;
    questions:Ques[];
    marks:number;
    setIsClicked:(clicked:boolean)=>void;
}

const Questions=({handleClick,isClicked,questions,setIsClicked,marks}:Queschildren)=>{
   
    const [index,setIndex]=useState<number>(0)
    const [isIndex,setIsIndex]=useState<number|null>(null)
    const [timeUp,setTimeUp]=useState<boolean>(false)
    const [submit,setSubmit]=useState<string>("Next")

    //Got help from Chatgpt....Without this the timer resets everytime when the user clicks next...
    const timerEndRef = useRef<number>(Date.now() + 50000);
    useEffect(() => {
        timerEndRef.current = Date.now() + 50000;
    }, []);


    const handleNextClick=useCallback(()=>{
        if(index<(questions.length-2)){
            setIndex(index+1);
            setIsIndex(null);
            setIsClicked(false)
        }else if(index==(questions.length-2)){
            setIndex(index+1);
            setIsIndex(null);
            setIsClicked(false)
            setSubmit("Submit")
        }else{
            setTimeUp(true)
        }
        
    },[index, questions.length])

    const handleIndexClick=useCallback((idx:number,option:string,index:number)=>{
        if(!isClicked){
            setIsIndex(idx);
            handleClick(option,index);
            setIsClicked(true)
        }
        

    },[isClicked, handleClick, index])
    
    

    const options=questions[index].o.map((option,idx)=>{
        const isSelected=isIndex===idx;
        const correct=option===questions[index].a
        const names = isClicked 
            ? (isSelected 
                ? (correct ? 'w-9/12 h-10  bg-green-500 rounded-full mb-5 flex pl-10 items-center option cursor-pointer' 
                             : 'w-9/12 h-10 bg-red-500 rounded-full mb-5 flex pl-10 items-center option cursor-pointer') 
                : (correct ? 'w-9/12 h-10 bg-green-300 rounded-full mb-5 flex pl-10 items-center option cursor-pointer'
                             : 'w-9/12 h-10 bg-red-500 rounded-full mb-5 flex pl-10 items-center option cursor-pointer'))
            : 'w-9/12 h-10 bg-gray-500 rounded-full text-white mb-5 flex pl-10 items-center hover:bg-transparent hover:border hover:border-gray-500 option cursor-pointer'; 
        return(<div className={names} onClick={()=>handleIndexClick(idx,option,index)} style={{ pointerEvents: isClicked ? 'none' : 'auto' ,}} key={idx}>
             {option}
             </div>)
    })

    const optionbody=(
        <>
            <p className='mt-10 mb-6'>{questions[index].q}</p>
                {options}
                <div className="w-9/12 flex justify-between px-2 mt-2">
                <button className='rounded-full text-white w-32 h-14 mt-1 bg-gray-500 hover:bg-transparent hover:border hover:border-white  text-lg'>
                <Countdown 
                        date={timerEndRef.current}
                        onComplete={() =>setTimeUp(true)}
                        renderer={({ seconds }) => (
                            <span className="text-lg">{seconds}s</span>
                        )}
                    />
                </button>
                <button className='rounded-full w-32 h-14 text-white mt-1 bg-gray-500 hover:bg-transparent hover:border hover:border-white  text-lg' onClick={handleNextClick}>{submit}</button>
                </div>
                
                
        </>
    )
     const renderedOption=!timeUp?(optionbody):(
        <div>
            <h1 className="mt-24 text-white text-2xl">Sorry..!!! The test has ended</h1>
            <p className="mt-8  text-white text-2xl">The Marks you scored : {marks}</p>
        </div>)
    
    
    return (
        <>
            <div className='w-5/12 flex flex-col items-center'>
            {renderedOption}
            </div>
        </>
        
    )
}

export default Questions;