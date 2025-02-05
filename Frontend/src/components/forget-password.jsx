import React from "react";
import { NavLink } from "react-router";
import img from "../../public/fp.svg";
import Register_Navbar from "../components/register-navbar";

export default function Reset_Password() {
    return (
        <>
            <Register_Navbar />

            <div className="flex w-6/12 mx-auto mt-12 gap-x-36 items-center ">
                <img src={img} alt="" />
                <div className="space-y-2">
                    <p className="text-3xl font-bold opacity-80">Forgot your password?</p>
                    <p className="text-sm opacity-60 font-semibold">
                        Please enter the email address associated with your account and We
                        will email you a link to reset your password.{" "}
                    </p>

                    <div className="grid grid-col gap-y-4 mt-8">
                        <input
                            className="border border-gray-300 outline-none rounded-md px-4 py-2 font-semibold w-[25vw] focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1]  opacity-60"
                            type="text"
                            placeholder="Email"
                        />

                        <button className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold w-[25vw] bg-[#3eac21] hover:bg-[rgb(81,153,65)] duration-300 cursor-pointer text-center text-white text-sm">
                            Reset Password
                        </button>
                        <NavLink
                            to={"/sign_in"}
                            className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold w-[25vw] bg-gray-200 hover:bg-gray-300 duration-200 cursor-pointer text-center  text-sm"
                        >
                            Back
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}