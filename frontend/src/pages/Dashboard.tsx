import { PlusIcon } from "lucide-react";
import { useState } from "react";
import MaterialModal from "../components/MaterialModal";
import type { Material } from "@mikiri/types";
import { useNavigate } from "react-router-dom";

type DashboardProps = {
    materials: Material[];
    setMaterials: React.Dispatch<React.SetStateAction<Material[]>>;
};

const Dashboard = ({ materials, setMaterials }: DashboardProps) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <div className="h-full border border-gray-100 rounded-xl p-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-xl flex">Hello Username, let's read something today</h1>
                    <button
                        className="bg-gradient-to-r from-gray-500 to-gray-900 px-4 text-white py-2.5
                rounded-lg cursor-pointer mt-2 flex gap-2 items-center justify-center text-sm font-semibold
                hover:shadow-md transition-all duration-200"
                        onClick={() => setModalOpen(true)}>
                        <PlusIcon />
                        Add new text
                    </button>
                </div>
                <div className="w-full bg-gray-700 h-0.25 my-6" />

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {materials.map((item) => (
                        <div
                            key={item.title}
                            className="border-gray-500 border rounded-xl p-4 shadow-sm backdrop-blur-lg">
                            <h2
                                className="font-semibold text-md mb-4 cursor-pointer hover:text-gray-600"
                                onClick={() => navigate(`/material/${item._id}`)}>
                                {item.title}
                            </h2>
                            <p>
                                {item.content.length > 50
                                    ? item.content.slice(0, Math.floor(Math.random() * (60 - 50 + 1)) + 50) + "...."
                                    : item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && <MaterialModal setModal={setModalOpen} setMaterials={setMaterials} />}
        </>
    );
};

export default Dashboard;
