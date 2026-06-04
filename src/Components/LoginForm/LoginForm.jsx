import React, { useState } from "react";
import User from "../User/User";
import Admin from "../Admin/Admin";
import MainContainer from "../MainContainer/MainContainer";

const LoginForm = () => {
    const [admin, setAdmin] = useState(false);
    const [userLogin, setUserLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState(false);

    const adminLoginBtn = (value) => setAdminLogin(value);
    const userLoginBtn = (value) => setUserLogin(value);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900/20 via-gray-900/20 to-black/20 text-white">
            {/* Login Section */}
            <div
                className={
                    adminLogin || userLogin
                        ? "hidden"
                        : "flex items-center justify-center min-h-screen px-4"
                }
            >
                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-500">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <img
                            className="w-[120px] rounded-full border-2 border-white/30"
                            src="/ChatGPT-Image-Mar-20,-2026,-02_57_57-PM.png"
                            alt="logo"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-center text-3xl font-bold mb-2">
                        Welcome Back 👋
                    </h2>
                    <p className="text-center text-gray-300 mb-6">
                        {admin ? "Admin Panel Login" : "User Login System"}
                    </p>

                    {/* Form */}
                    <div className="space-y-4">
                        {admin ? (
                            <Admin adminLoginBtn={adminLoginBtn} />
                        ) : (
                            <User userLoginBtn={userLoginBtn} />
                        )}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-[1px] bg-gray-500"></div>
                        <span className="px-3 text-sm text-gray-400">or</span>
                        <div className="flex-1 h-[1px] bg-gray-500"></div>
                    </div>

                    {/* Toggle */}
                    <p
                        onClick={() => {
                            setAdmin(!admin);
                            setUserLogin(false);
                            setAdminLogin(false);
                        }}
                        className="text-center cursor-pointer text-indigo-400 hover:text-indigo-300 transition"
                    >
                        {admin
                            ? "Switch to User Login"
                            : "Switch to Admin Login"}
                    </p>
                </div>
            </div>

            {/* Main App */}
            {(adminLogin || userLogin) && (
                <MainContainer adminLogin={adminLogin} />
            )}
        </div>
    );
};

export default LoginForm;
