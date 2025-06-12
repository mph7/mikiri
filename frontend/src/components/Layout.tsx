import { useCallback, useEffect, useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import type { MaterialsResponse, Material, User } from "@mikiri/types";

type LayoutProps = {
    onLogout: () => void;
    user: User | null;
    children: ReactNode;
};

const Layout = ({ onLogout, user }: LayoutProps) => {
    const [materials, setMaterials] = useState<Material[]>([]); // Deveria ser ImportedMaterial[]
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const fetchMaterials = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No auth token found");

            const { data } = await axios.get<MaterialsResponse>("http://localhost:4000/api/materials/", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const arr = data.success === true ? data.materials : [];

            setMaterials(arr);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Could not load materials");
            if (err.response?.status === 401) onLogout();
        } finally {
            setLoading(false);
        }
    }, [onLogout]);
    useEffect(() => {
        fetchMaterials();
    }, [fetchMaterials]);

    // ERROR
    if (loading)
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 bg-red-500"></div>
            </div>
        );

    // LOADING
    if (error)
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 max-w-md">
                    <p className="font-medium mb-2">Error loading tasks</p>
                    <p className="text-sm">{error}</p>
                    <button
                        onClick={fetchMaterials}
                        className="mt-4 py-2 px-4 bg-red-100 text-red-700 rounded-lg 
                text-sm font-medium hover:bg-red-200 transition-colors">
                        Try Again
                    </button>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-50">
            {user && <Navbar user={user} onLogout={onLogout} />}
            <Sidebar user={user} />
            <div className="ml-0 xl:ml-64 lg:ml-64 md:ml-16 pt-16 p-3 sm:p-4 md:p-4 transition-all duration-300">
                <div className="grid grid-cols-1 xl:grid-cols-3 sm: gap-6">
                    <div className="xl:col-span-3 space-y-3 sm:space-y-4 sm">
                        <Outlet context={{ materials, refreshMaterials: fetchMaterials }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
