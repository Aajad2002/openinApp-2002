import React, { useContext, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillApple } from 'react-icons/ai';
import { AuthContext } from './AuthProvider';
 

const Signin = () => {
  const {isAuth,setIsAuth}=useContext(AuthContext)

    const [state, setState] = useState(true)
    const handleState = () => {
        setState(!state)
    }
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        password: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    //google authorization
    const handleLoginSuccess = async (credentialResponse) => {
        const accessToken = await credentialResponse.credential;
          setIsAuth(true)
    };

    // const fetchGoogleUserProfile = (accessToken) => {
    //     fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`
    //         }
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             // Access the user's profile information here
    //             console.log("Google User Profile:", data);

    //             // Now you can use this information as needed
    //             const { name, email, picture } = data;
    //             console.log("Name:", name);
    //             console.log("Email:", email);
    //             console.log("Profile Picture:", picture);

    //             // Rest of your code
    //             // Swal.fire({
    //             //     text: "Login successfully!",
    //             //     icon: "success",
    //             //     timer: 1000,
    //             //     position: "top-center",
    //             //     toast: true,
    //             //     showConfirmButton: false,
    //             //     timer: 2000,
    //             //     showClass: {
    //             //         popup: "swal2-show",
    //             //         backdrop: "swal2-backdrop-show",
    //             //         icon: "swal2-icon-show"
    //             //     },
    //             //     hideClass: {
    //             //         popup: "swal2-hide",
    //             //         backdrop: "swal2-backdrop-hide",
    //             //         icon: "swal2-icon-hide"
    //             //     }
    //             // });
    //             setTimeout(() => {
    //                console.log('settime out function')
    //             }, 2000);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching user profile:", error);
    //         });
    // };

    const handleLoginFailure = (error) => {
        
    };
    return (
        <div className='w-full h-screen flex justify-between items-center  flex-col md:flex-row '>
            <div className='flex h-[60px] justify-between items-center px-2 w-[100%] bg-gradient-to-r from-blue-500 to-blue-800 mix-blend-multiply md:hidden'>
                <h1 className='font-[poppins] font-black text-white text-[34px]'>LOGO</h1>
            </div>
            <div className='h-full p-0 border-r-0 overflow-hidden overflow-x-hidden relative md:block hidden md:w-[50%] bg-gradient-to-r from-blue-500 to-blue-800'>
                <div className='z-100 w-[80%]   absolute flex flex-col justify-between  h-[100vh]'>
                    <h1 className='ml-16 mt-12 font-[poppins] font-black text-white text-[24px]'>LOGO</h1>
                    <h1 className='font-[Montserrat] text-center font-black text-white text-[72px]'>Board.</h1>
                    <div className=' w-[299px] mx-auto mb-10  flex justify-between  text-[40px] text-white'>
                        <FaGithub />
                        <AiFillTwitterCircle />
                        <AiFillLinkedin />
                        <BiLogoDiscord />
                    </div>
                </div>
                <span className=' absolute -right-[80px] transform -skew-x-[12.8deg] z-50 block w-[160px] h-full bg-[#F8FAFF]'></span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center w-[100%] md:w-[50%] bg-[#F8FAFF] mb-8'>
                <div className='w-[100%] bg-[#F8FAFF]'>
                    <div className='md:w-[44%] flex-col md:flex-col flex justify-between w-[90%] m-auto bg-[hsl(223,100%,99%)] mb-4'>
                          <h1 className='font-[poppins] font-black text-[24px]'>{state? "Sign in":"Sign Up"}</h1>
                          <p className='font-[poppins] font-black text-[14px] mb-4'> {state?"sign in to your account":"create new account"}</p>

                            <GoogleLogin
                                clientId="802148784345-1dqn0lkijcir14qooc3ssf301jvrc2un.apps.googleusercontent.com"
                                onSuccess={handleLoginSuccess}
                                onFailure={handleLoginFailure}
                                className="custom-google-button"
                               
                            />
                       
                        {/* <button className='w-[280px] h-[44px] flex items-center border-slate-200 rounded-[4px] border-[1px] bg-white font-[poppins] font-bold px-2 '>
                            <AiFillApple className='text-[25px]'/><span className='text-[14px] ml-2'> Sign in with Apple</span>
                        </button> */}
                    </div>
                    <div className='w-[100%] font-[poppins]'>
                        {
                            state ? <Login formData={formData} handleChange={handleChange} handleState={handleState} /> : <Signup formData={formData} handleChange={handleChange} handleState={handleState} />
                        }
                        {
                            state ? <p className='text-center mt-3'>Don't have an account? or<span className='text-blue-500 cursor-pointer' onClick={handleState}> Register here</span></p> : <p className='text-center mt-3'>already a user? or<span onClick={handleState} className='text-blue-500 cursor-pointer'> Login here</span></p>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signin