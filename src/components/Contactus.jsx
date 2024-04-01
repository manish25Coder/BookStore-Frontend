import React from 'react'

function Contactus() {
  return (
    <div>
         <div className="flex items-center justify-center h-[100vh] ">
                <form 
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem] ">
                    
                    <h1 className="text-3xl font-semibold ">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold outline-none">Name</label>
                        <input
                            className="br-transparent border px-2 py-1 rounded-sm"
                            id="name"
                            type="email"
                            name="name"
                            placeholder="Enter your name"
                           
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">Email</label>
                        <input
                            className="br-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            
                        />
                    </div>

                     <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">Message</label>
                        <textarea
                            className="br-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your email"
                            
                        />
                    </div>

                    <button type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg Cursor-pointer"
                    >
                        Submit
                    </button>

                </form>
            </div>
    </div>
  )
}

export default Contactus