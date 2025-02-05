import React from "react";
import Signup from "../../public/signup.svg";
import { EyeOff } from "lucide-react";
import Register_Navbar from "../components/register-navbar";

export default function SignUp() {
    return (
        <>
            <Register_Navbar />

            <div className="flex w-8/12 mx-auto mt-12 gap-x-36 items-center ">
                <img src={Signup} alt="" />
                <div className="space-y-2">
                    <p className="text-3xl font-bold opacity-80">Get Start Shopping</p>
                    <p className="text-sm opacity-60 font-semibold">
                        Welcome back to FreshCart! Enter your email to get started.
                    </p>
                    <div className="grid grid-col gap-y-4 mt-12 ">
                        <div className="flex items-center  gap-x-4 ">
                            <input
                                className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[12vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] opacity-60"
                                type="text"
                                placeholder="First Name"
                            />
                            <input
                                className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[12vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] opacity-60"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>

                        <input
                            className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[25vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] opacity-60"
                            type="text"
                            placeholder="Email"
                        />
                        <div className="relative">
                            <input
                                className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[25vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] opacity-60"
                                type="password"
                                placeholder="*"
                            />
                            <EyeOff
                                size={16}
                                strokeWidth={1}
                                className="absolute top-3 right-6 opacity-80 cursor-pointer "
                            />
                        </div>

                        <button className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold w-[25vw] bg-[#3eac21] hover:bg-[#519b58] duration-300 cursor-pointer text-center text-white text-sm">
                            Register
                        </button>
                        <p className="text-xs font-semibold opacity-70">
                            By continuing, you agree to our{" "}
                            <span className="text-[#3eac21] cursor-pointer">
                                Terms of Service
                            </span>{" "}
                            &{" "}
                            <span className="text-[#3eac21] cursor-pointer">
                                Privacy Policy
                            </span>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}