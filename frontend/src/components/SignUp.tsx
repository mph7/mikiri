import axios from "axios";
import { Mail, User, UserPlus, Lock, Icon } from "lucide-react";
import { useState } from "react";

const API_URL = "http://localhost:4000";
const INITIAL_FORM = { name: "", email: "", password: "" };

type dataType = {
    success: boolean;
    message?: string;
    user?: {
        id: string;
        name: string;
        email: string;
    };
};

type SignUpProps = {
    onSubmit: () => void;
    onSwitchMode: (data: dataType) => void;
};

const SignUp = ({ onSubmit, onSwitchMode }: SignUpProps) => {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });
    const MESSAGE_SUCCESS = "bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4 border border-green-100";
    const MESSAGE_ERROR = "bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100";
    const FIELDS = [
        { name: "name", type: "text", placeholder: "Name", icon: User },
        { name: "email", type: "email", placeholder: "Email", icon: Mail },
        { name: "password", type: "password", placeholder: "Password", icon: Lock },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            const { data } = await axios.post(`${API_URL}/api/user/register`, formData);
            console.log("Signup Successfull", data);
            setMessage({ text: "Registration successful!, redirecting...", type: "success" });
            setFormData(INITIAL_FORM);
            onSubmit(data);
        } catch (err) {
            console.error("Signup error", err);
            setMessage({
                text: err.response?.data?.message || "An error occurred. Please try again later",
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="max-w-md bg-white shadow-lg border border-red-100 rounded-xl p-12
        flex flex-col items-center justify-center">
            <div className="mb-6 text-center">
                <div
                    className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-800 rounded-full
                mx-auto flex items-center justify-center mb-4">
                    <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-500 text-sm mt-1">Join Mikiri and start reading in Japanese</p>
            </div>

            {message.text && (
                <div className={message.type === "success" ? MESSAGE_SUCCESS : MESSAGE_ERROR}>{message.text}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {FIELDS.map(({ name, type, placeholder, icon: Icon }) => (
                    <div
                        key={name}
                        className="flex items-center border border-red-100 rounded-lg px-3 
                    py-2.5 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500
                    transition-all duration-200">
                        <Icon className="text-red-500 w-5 h-5 mr-2" />
                        <input
                            type={type}
                            placeholder={placeholder}
                            value={formData[name]}
                            onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                            className="w-full focus:outline-none text-sm text-gray-700"
                            required
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-900 text-white 
                text-sm font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center
                justify-center gap-2 cursor-pointer"
                    disabled={loading}>
                    {loading ? (
                        "Signing Up..."
                    ) : (
                        <>
                            <UserPlus className="w-4 h-4" />
                            Sign Up
                        </>
                    )}
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <button
                    onClick={onSwitchMode}
                    className="text-red-600 hover:text-red-700 hover:underline
                font-medium transition-colors cursor-pointer">
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignUp;
