import React from "react";
import mylogo from "../../public/logo.svg";
import { NavLink } from "react-router";

export default function Register_Navbar() {
    return (
        <div className="  shadow-xl">
            <div className="w-10/12 mx-auto flex justify-between items-center py-4">
                <img src={mylogo} alt="Logo" />
                <p className="text-sm">
                    <span className=" opacity-90"> Already have an account?</span>{" "}
                    <NavLink to={"/sign_in"} className="font-semibold cursor-pointer">
                        {" "}
                        Sign in
                    </NavLink>
                </p>
            </div>
        </div>
    );
}