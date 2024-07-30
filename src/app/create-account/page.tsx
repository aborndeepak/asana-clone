
"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";

export default function CreateAccount() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
            
            <div className="flex flex-col justify-center items-center">
                
                <div>
                    <h1 className="text-4xl text-center">
                        You're one click away <br /> from less busywork
                    </h1>
                </div>

                <div className="my-6">
                    <button className="mt-4 text-center font-semibold bg-blue-500 text-white rounded px-4 py-3">Continue with your Google work account</button>
                </div>

                <div className="flex items-center justify-center my-2">
                    <div className="border-t border-gray-300 flex-grow w-16" style={{ width: '140px' }}></div>
                    <span className="mx-4 text-gray-500">OR</span>
                    <div className="border-t border-gray-300 flex-grow w-16" style={{ width: '140px' }}></div>
                </div>

                <div className="flex items-center space-x-0">
                    <input type="text" className="border border-gray-300 rounded-l px-4 py-3" placeholder="name@company.com" />
                    <button className="bg-black font-semibold text-white rounded-r px-4 py-3">Continue</button>
                </div>

                <div>
                    <p className="text-xs mt-3">By signing up, I agree to the Asana <a href="" className="text-black-500 font-semibold">Privacy Policy</a> and <a href="" className="text-black-500 font-semibold">Terms of Service</a>.</p>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="px-5">
                    <p>Get access to unlimited tasks, projects, and storage.</p>
                </div>
                <div className="px-5">
                    <p>See different views like list, board, and calendar.</p>
                </div>
                <div className="px-5">
                    <p>Invite your teammates to explore Asana.</p>
                </div>
            </div>
        
    </div>
  );
}
