import React, { useState } from "react"
import LoginPage from "./LoginPage"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [login, setLogin] = useState<any>({
        email: '',
        password: ''
    })
    console.log("login", login)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        // Save login data with time-period
        const expiry = Date.now() + 1 * 60 * 1000; // 1 minutes 
        const dataToStore = {
            ...login,
            expiry,
        };
        localStorage.setItem("loginData", JSON.stringify(dataToStore));
        navigate("/vendor_part");

        //  remove after time-period 
        setTimeout(() => {
            localStorage.removeItem("loginData");
        }, 1 * 60 * 1000);

    };



    return (
        <>
            <LoginPage login={login} setLogin={setLogin} handleSubmit={handleSubmit} />
        </>
    )
}



export default Login



