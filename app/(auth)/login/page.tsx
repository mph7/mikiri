"use client";

import { LogInIcon, LucideIcon, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react";
import Link from "next/link";


const INITIAL_FORM = { email: "", password: "" };


const Login = () => {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });
    const [showPassword, setShowPassword] = useState(false);
    const MESSAGE_SUCCESS = "bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4 border border-green-100";
    const MESSAGE_ERROR = "bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100";

    interface FieldConfig {
        name: "email" | "password";
        type: "email" | "password";
        placeholder: string;
        icon: LucideIcon;
    }
    const FIELDS: FieldConfig[] = [
        { name: "email", type: "email", placeholder: "Email", icon: Mail },
        { name: "password", type: "password", placeholder: "Password", icon: Lock },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        // try {
        //     const { data } = await axios.post(`${API_URL}/api/user/login`, {
        //         email: formData.email,
        //         password: formData.password,
        //     });
        //     if (!data.token) throw new Error(data.message || "Login failed");

        //     console.log("Login successful. ", data);
        //     setMessage({ text: "Login successful, redirecting...", type: "success" });
        //     onSubmit(data);
        //     setFormData(INITIAL_FORM);
        // } catch (err) {
        //     console.error("Login error. ", err);
        //     setMessage({ text: "An error occurred, please try again later.", type: "error" });
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-800">
            <div
                className="max-w-md bg-white shadow-lg border border-red-100 rounded-xl p-12
        flex flex-col items-center justify-center">
                <div className="text-center mb-6">
                    <div
                        className="w-16 h-16 flex items-center justify-center text-red-600 rounded-full bg-gradient-to-br
          from-red-500 to-red-800 mx-auto">
                        <LogInIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-bold text-2xl text-gray-800">Welcome back!</h2>
                    <p className="text-sm text-gray-500 mt-1">Enter your account and keep exploring Japanese stories.</p>
                </div>

                {message.text ? (
                    <div className={message.type === "success" ? MESSAGE_SUCCESS : MESSAGE_ERROR}>{message.text}</div>
                ) : (
                    ""
                )}

                <form onSubmit={handleSubmit} className="gap-2 flex flex-col">
                    {FIELDS.map(({ name, type, placeholder, icon: Icon }) => (
                        <div
                            key={name}
                            className="flex border border-red-100 px-3 py-2.5 rounded-lg mb-2 items-center
                    focus-within:ring-red-500 focus-within:ring-2 focus-within:border-red-500 
                    transition-all duration-200">
                            <Icon className="text-red-500 w-5 h-5 mr-2" />
                            <input
                                type={type !== "password" ? type : showPassword === true ? "text" : "password"}
                                placeholder={placeholder}
                                value={formData[name]}
                                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                                className="w-full focus:outline-none text-sm text-gray-700"
                            />

                            {type === "password" && (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="ml-2 text-gray-500 hover:text-red-600 transition-colors">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-red-500 to-red-900 w-full text-white py-2.5
                rounded-lg cursor-pointer mt-2 flex gap-2 items-center justify-center text-sm font-semibold
                hover:shadow-md transition-all duration-200"
                        disabled={loading}>
                        {loading ? (
                            "Loging In..."
                        ) : (
                            <>
                                <LogInIcon className="w-5 h-5" /> Login
                            </>
                        )}
                    </button>
                </form>
                <p className="text-sm mt-6 text-gray-600 text-center">
                    Doesn't have an account yet?{" "}
                    <Link
                        href='/signup'
                        className="cursor-pointer text-red-600 hover:text-red-700 font-medium hover:underline 
                transition-colors">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login