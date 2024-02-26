import React, { useState } from 'react'

const signUpInitials={
    name:"",
    username:"",
    password:""
    
}

const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, setAccount] = useState('login')

    const [signUp, setSignUp] = useState(signUpInitials)

    const toggleSignUp=()=>{
        if (account==='login')
        {
            setAccount("signup")
        }
        else{
            setAccount("login")
        }
    }

    const onInputChange=(e)=>{

        setSignUp({...signUp,[e.target.name]:e.target.value})
        
    }

  return (
    <div className='flex flex-col w-1/3 py-10 px-24  shadow-xl mx-auto my-28'>

        {
            account==='login'?
            <>
                <img src={imageURL} alt="company logo" height={100} width={100} className='mx-auto'/>
                <input type="text" placeholder='Enter username' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" placeholder='Enter password' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>

                <button className='bg-[#FB6413] text-white rounded-lg mt-4 py-2 hover:bg-[#FB7813] duration-200'>Login</button>
                <p className='mx-auto my-2 text-slate-500'>OR</p>
                <br />
                <button className='text-[#FB6413] w-fit mx-auto' onClick={()=>{toggleSignUp()}}>CREATE AN ACCOUNT</button>
            </>
                :
            <>
                <img src={imageURL} alt="company logo" height={100} width={100} className='mx-auto'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='name' placeholder='Enter name' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='username' placeholder='Enter username' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='password' placeholder='Enter password' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>

                <button className='text-[#FB6413] w-fit mx-auto' onClick={()=>{toggleSignUp()}}>ALREADY HAVE AN ACCOUNT</button>
                <p className='mx-auto my-2 text-slate-500'>OR</p>
                <br />
                <button className='bg-[#FB6413] text-white rounded-lg mt-4 py-2 hover:bg-[#FB7813] duration-200'>Sign in</button>
            </>
        }
    </div>
  )
}

export default Login