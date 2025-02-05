import React from "react";
import SigIn from "../../public/sign-in.svg";
import { EyeOff } from "lucide-react";
import { NavLink } from "react-router";
import Register_Navbar from "../components/register-navbar";

export default function SignIn() {


    return (
        <div>
            <Register_Navbar />
            <div className="flex w-8/12 mx-auto mt-12 gap-x-36 items-center ">
                <img src={SigIn} alt="" />
                <div className="space-y-2">
                    <p className="text-3xl font-bold opacity-80">Sign in to FreshCart</p>
                    <p className="text-sm opacity-60 font-semibold">
                        Welcome back to FreshCart! Enter your email to get started.
                    </p>

                    <div className="grid grid-col gap-y-4 mt-8">
                        <input
                            className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[25vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1]  opacity-60"
                            type="text"
                            placeholder="Email"
                        />
                        <div className="relative">

                            <input
                                className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[25vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] opacity-60"
                                type="password"
                                placeholder="*"
                            />
                            <EyeOff size={16} strokeWidth={1} className="absolute top-3 right-6 opacity-80 cursor-pointer " />

                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center ">
                                <input
                                    type="checkbox"
                                    className=" checked:bg-green-500  h-[2vh] w-[2vw] cursor-pointer "
                                />
                                <p className="text-sm font-semibold opacity-70">Remember me</p>
                            </div>

                            <p className="text-sm font-semibold opacity-70">Forgot password? <NavLink to={"/reset_password"} className="text-[#3eac21] cursor-pointer">Reset It</NavLink> </p>
                        </div>
                        <button
                            className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold w-[25vw] bg-[#3eac21] hover:bg-[rgb(81,153,65)] duration-300 cursor-pointer text-center text-white text-sm"
                        >Sign In</button>
                        <p className="text-sm font-semibold opacity-70 ">Don’t have an account? <NavLink to={"/sign_up"} className="text-[#3eac21] cursor-pointer"> Sign Up</NavLink> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}