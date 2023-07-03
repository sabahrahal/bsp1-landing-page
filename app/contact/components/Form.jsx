'use client'

import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const Form = () => {

    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_mibvdq5', 'template_74xu1at', form.current , 'GlKLxw9tS6ilvZZo7')
          .then((result) => {
            form.current.reset(); 
          }, (error) => {
            throw new Error(error);
          });
    };

    return (
        <form  ref={ form } onSubmit={ sendEmail }>
            <div className="flex flex-wrap my-6">
                <div className="w-full md:w-1/2 mb-6 md:pr-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    name="user_name" 
                    type="text" 
                    placeholder="Jane"
                    minLength={2}
                    required
                    />

                </div>
                <div className="w-full md:w-1/2">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Phone
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    name="user_phone" 
                    type="tel"
                    placeholder="Doe"
                    minLength={8}
                    required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    name="user_email" 
                    type="email"
                    placeholder="janedoe@mail.com"
                    required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                    name="message" 
                    required
                    minLength={10} 
                    placeholder="tell us about what you need..."
                    ></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button className="w-full lg:w-40 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-6 hover:bg-secondary duration-300" 
                    type="submit"
                    >
                        Send
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    )
}
