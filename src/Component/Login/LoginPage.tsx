import type React from "react"
import Dynamic_Input from "../Dynamic/Inputs/Input"


export interface LoginData {
    email: string | number,
    password: string | number
}
interface Props {
    login: LoginData,
    handleSubmit: (e: React.FormEvent) => void,
    setLogin: any,
}

function LoginPage({ handleSubmit, setLogin, login }: Props) {

    const handleChange = (key: any, value: any) => {
        { setLogin({ ...login, [key]: value }) }
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 mt-40  ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm border-1 border-gray-200 px-5 py-3 rounded shadow-md">
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign in
                    </h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div>
                                <div className="mt-2">

                                    <Dynamic_Input
                                        label="Email"
                                        name="email"
                                        value={login.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">

                                </div>
                                <div className="mt-2">

                                    <Dynamic_Input
                                        label="Password"
                                        name="password"
                                        value={login.password}
                                        onChange={(e) => handleChange('password', e.target.value)}
                                    />

                                    <div className="text-sm mt-2">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage