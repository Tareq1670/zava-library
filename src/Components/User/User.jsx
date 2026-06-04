import React, { useState } from "react";

const User = ({ userLoginBtn }) => {
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");
    const userBtnLogin = () => {
        if(email === "user123@gmail.com" && pass==="user123"){
            userLoginBtn(true)
            setEmail("");
            setPass("")
            
        }else{
            setEmail("");
            setPass("")
            alert("User Login is fail")
        }
    };
    return (
        <div>
            <fieldset className="fieldest items-center justify-center flex flex-col items-start">
                <label className="mb-2 text-18 font-">User Email</label>
                <input
                value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Input Your User Email"
                    className="input w-full mb-3"
                />
                <label className="mb-2 text-18 font-">User Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Input Your User Password"
                    className="input w-full mb-4"
                />
                <button onClick={userBtnLogin} className="btn btn-success w-full">Login</button>
            </fieldset>
        </div>
    );
};

export default User;
