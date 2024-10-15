import Logo from './logo'

interface click{
  handleClick:()=>void
}
const Startingpage=({handleClick}:click)=>{

  const handleGoClick=()=>{
    handleClick()
  }
    return (
        <div className='flex flex-col items-center mt-36'>
        <Logo />
        <p className='text-4xl mb-6 text-blue-500 font-bold'>Welcome to The React Quiz!</p>
        <p className='text-xl text-white'>15 question to test your react mastery</p>
        <button className='rounded-full w-32 h-14 mt-8 bg-gray-500 hover:bg-transparent hover:border hover:border-white  text-lg' onClick={handleGoClick}>Let's Go</button>
      </div>
    )
}

export default Startingpage;