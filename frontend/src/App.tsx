import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import type { User, Material } from "@mikiri/types";
import Reader from "./components/Reader";

const App = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const stored = localStorage.getItem("currentUser");
        return stored ? (JSON.parse(stored) as User) : null;
    });
    const [materials, setMaterials] = useState<Material[]>(() => {
        return JSON.parse(localStorage.getItem("materials") || "[]");
    });

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem("materials", JSON.stringify(materials));
    }, [materials]);

    const handleAuthSubmit = (data: { token: string; user?: User }) => {
        if (!data.user?.id) return;
        const user: User = {
            id: data.user?.id,
            email: data.user?.email,
            name: data.user?.name || "user",
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user?.name || "User")}&background=random`,
        };
        setCurrentUser(user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);
        navigate("/", { replace: true });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
        navigate("/login", { replace: true });
    };

    const ProtectedLayout = () => {
        return (
            <Layout user={currentUser} onLogout={handleLogout}>
                <Outlet />
            </Layout>
        );
    };

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Login onSubmit={handleAuthSubmit} onSwitchMode={() => navigate("/signup")} />
                    </div>
                }
            />

            <Route
                path="/signup"
                element={
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <SignUp onSubmit={handleAuthSubmit} onSwitchMode={() => navigate("/login")} />
                    </div>
                }
            />

            <Route element={currentUser ? <ProtectedLayout /> : <Navigate to="/login" replace />}>
                <Route
                    path="/"
                    element={
                        <Dashboard materials={materials} setMaterials={setMaterials} />
                    }
                />
                <Route path="/material/:id" element={<Reader materials={materials}/>} />
            </Route>

            <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
        </Routes>
    );
};

export default App;
