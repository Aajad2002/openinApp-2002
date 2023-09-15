import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"

import { AuthContext } from "./AuthProvider";

export default function ModalAddProfileButton({ closeModal }) {
    const { setUser,setCheck } = useContext(AuthContext)

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        mobile: '',
        instagram: '',
        youtube: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData)
        setCheck(true)
        closeModal()
        // console.log('Form submitted:', formData);
    };

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] rounded-[10px] p-6'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-[18px]'>Add New Profile</h1>
                    <div className='font-semibold text-[18px]' onClick={closeModal}>
                        <AiOutlineClose className='font-semibold text-[28px]' />
                    </div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='w-[47%]'>
                        <h1 className='text-center font-semibold text-[18px]' >Basic</h1>
                        <div className={`${step === 1 ? 'bg-blue-600' : "bg-slate-200"} h-[5px] rounded mt-1`}></div>
                    </div>
                    <div className='w-[47%]'>
                        <h1 className='text-center font-semibold text-[18px]' >Social</h1>
                        <div className={`${step === 2 ? 'bg-blue-600' : "bg-slate-200"} h-[5px] rounded mt-1`}></div>
                    </div>
                </div>
                {step === 1 && (
                    <div className='mt-3'>
                        <form onSubmit={nextStep}>
                            <div className='mb-6'>
                                <label htmlFor="name" className="block mb-2 text-[17px] font-medium">Enter name</label>
                                <input name='name' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. John Doe" value={formData.name}
                                    onChange={handleChange} required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="email" className="block mb-2 text-[17px] font-medium">Enter email</label>
                                <input name='email' type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@dulela.com" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="mobile" className="block mb-2 text-[17px] font-medium">Enter mobile</label>
                                <input name='mobile' type="tel" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. 11938299078" minLength={10} maxLength={10} value={formData.mobile}
                                    onChange={handleChange} required />
                            </div>
                            <button className='float-right font-semibold text-[14px] h-[45px] w-[100px] bg-blue-600 text-white rounded-[8px]' type="submit">Next</button>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div className='mt-3'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-6'>
                                <label htmlFor="instagram" className="block mb-2 text-[17px] font-medium">Instagram Link <span className='text-slate-300'>(optional)</span></label>
                                <input name='instagram' type="text" id="instagram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. Instagram.com/usename" maxLength={10} value={formData.instagram}
                                    onChange={handleChange} />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="youtube" className="block mb-2 text-[17px] font-medium">YouTube Link  <span className='text-slate-300'>(optional)</span></label>
                                <input name='youtube' type="text" id="youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. YouTube.com/username" maxLength={10} value={formData.youtube}
                                    onChange={handleChange} />
                            </div>
                            <br />
                            <button className='float-right font-semibold text-[14px] h-[45px] w-[100px] bg-blue-600 text-white rounded-[8px]' type="submit">Done</button>
                            <button className='float-right shadow-md mr-4 border-[2px] border-[#444] font-semibold text-[14px] h-[45px] w-[100px] bg-white text-black rounded-[8px]' type="button" onClick={prevStep}>
                                Back
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
