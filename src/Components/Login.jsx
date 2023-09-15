import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from './AuthProvider';
const Login = ({formData,handleChange}) => {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const url = 'https://space-authentication.onrender.com/users/login'
        const headers = {
            'Content-Type': 'application/json', 
          };          
         
          const requestOptions = {
            method: 'POST', 
            headers: headers,
            body: JSON.stringify(formData),
          };
          
          // Make the POST request
          fetch(url, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // Parse the response as JSON
            })
            .then(data => {
                console.log(data)
                const {status,msg}=data
                if(data.status){
                    toast.success(msg, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                    setIsAuth(true)
                  }else{
                    toast.error(msg, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  }
             
            })
            .catch(error => {              
              console.error('Fetch error:', error);
            });
    }
  return (
    <div className='bg-white p-6 m-auto w-[100%] md:w-[44%]'>
        <div className='absolute'>
            <ToastContainer/>
        </div>
        <form onSubmit={handleSubmit}>         
         <div className='mb-4'>
           <label htmlFor="email" className="block mb-2 text-[17px] font-medium  ">Email address</label>
           <input name='email' type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@dulela.com" value={formData.email} onChange={handleChange} required />
         </div>
         <div className='mb-4'>
           <label htmlFor="password" className="block mb-2 text-[17px] font-medium  ">Enter password</label>
           <input name='password' type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. ******" value={formData.password}
             onChange={handleChange} required />
         </div>
         
         <button className=' font-semibold text-[14px] h-[45px] w-full bg-blue-600 text-white rounded-[8px]' type="submit">Sign in</button>
       
         
       </form>
    </div>
  )
}

export default Login