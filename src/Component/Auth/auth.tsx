import { supabase } from "@/lib/subabaseClient"
import { useState } from "react"

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (isSignUp) {
            const { error: SignUpError } = await supabase.auth.signUp({
                email,
                password
            })
            if (SignUpError) {
                console.error("Err in sign up:", SignUpError.message)
            }
        } else {
            const { error: SignInError } = await supabase.auth.signInWithPassword({
                email,
                password
            })
            if (SignInError) {
                console.error("Err in sign up:", SignInError.message)
            }
        }
    }

    return (

        <>
            <div className="text-center ">
                <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="m-3">

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="m-3">

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="border border-gray-500 p-2 mx-3 rounded-xl"
                    >
                        Submit</button>
                </form>
                <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="m-3 border border-gray-500 p-2 mx-3 rounded-xl"
                >{isSignUp ? "Switch to Login" : "Switch to Sign Up"}</button>

            </div>
        </>

    )
}

export default Auth