import React, { useState } from "react";

const Admin = ({ adminLoginBtn }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleClick = () => {
        if (email === "admin123@gmail.com" && pass === "admin123") {
            adminLoginBtn(true);
            setEmail("");
            setPass("");
        }
        else{
            setEmail("");
        setPass("");
        alert("Place Input Your Valid Information")
        }
    };

    return (
        <div>
            <fieldset className="fieldest items-center justify-center flex flex-col items-start">
                <label className="mb-2 text-18 font-">Admin Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Input Your Admin Email"
                    className="input w-full mb-3"
                />
                <label className="mb-2 text-18 font-">Admin Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Input Your Admin Password"
                    className="input w-full mb-4"
                />
                <button
                    onClick={handleClick}
                    className="btn btn-success w-full"
                >
                    Login
                </button>
            </fieldset>
        </div>
    );
};

export default Admin;
