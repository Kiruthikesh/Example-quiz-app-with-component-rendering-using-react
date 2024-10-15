import reactimg from '../assets/react.svg'

const Logo=()=>{
    return(
        <div className='flex flex-col items-center justify-center'> 
            <img src={reactimg} alt="react-logo" className='w-16 mb-4' />
        <h1 className='text-5xl text-white mb-4 '>THE REACT QUIZ</h1>
        </div>
        
    )
}

export default Logo;