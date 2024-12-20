"use client";

import React, { useState } from "react";
import Input from "../components/Input";
import Link from "next/link";
import Button from "../components/button";


    type RegisterInputProps = {
        email: string;
        password: string;
    };
    
    const Login = () => {
        const [inputStates, setInputStates] = useState<RegisterInputProps>({
            email: "",
            password: "",
        });

    return (
        <div className="container h-full text-black dark:text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center  mb-2 dark:text-white">
                Log in
            </h1>
            <p className="text-gray-400 text-center mb-10">
                Welcome back! Please enter your details
            </p>
            <form className="flex flex-col w-full max-w-md">
                <Input
                    type="email"
                    placeholder="Username"
                    value={inputStates.email}
                        onChange={(e) =>
                            setInputStates((state) => ({
                                ...state,
                                email: e.target.value,
                            }))
                        } // Atualizar o valor de email
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={inputStates.password}
                        onChange={(e) =>
                            setInputStates((state) => ({
                                ...state,
                                password: e.target.value,
                            }))
                        } // Atualizar o valor de password
                />
                
                <div className="text-sm mb-3 text-center">
                    <p className="text-gray-400 text-base">
                        Forgot Password?{" "}
                        <Link
                            href="/auth/resetpassword"
                            className="hover:underline"
                        >
                            Reset now
                        </Link>
                    </p>
                </div>

                <Link href={"/dashboard"}>
                    <Button type="submit">Submit</Button>
                </Link>

                <p className="mt-6 text-center text-gray-400">
                    Do not have an account yet?{" "}
                    <Link
                        href="/auth/register"
                        className="text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
