import { NotebookText, TextQuote, XIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import type { Material } from "@mikiri/types";

type Props = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setMaterials: React.Dispatch<React.SetStateAction<Material[]>>;
};

const modalFields = [
    { name: "title", type: "text", placeholder: "Title", icon: TextQuote },
    { name: "text", type: "textarea", placeholder: "Text", icon: NotebookText },
];
const MaterialModal = ({ setModal, setMaterials }: Props) => {
    const [modalData, setModalData] = useState({ title: "", text: "" });

    const handleCreateMaterial = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMaterials((prev) => {
            return [...prev, modalData];
        });

        setModalData({ title: "", text: "" });
        closeModal();
    };

    const closeModal = () => setModal(false);

    return (
        <div className="z-100 w-dvw h-dvh fixed bg-gray-800/40 backdrop-blur-md top-0 left-0 flex items-center justify-center">
            <div className="bg-gray-100 p-6 rounded-xl min-w-90">
                <div className="flex justify-between mb-6 shadow-2xl backdrop-blur-2xl">
                    <h1 className="text-xl font-semibold">Create new Material</h1>
                    <button>
                        <XIcon className="cursor-pointer w-12" onClick={closeModal} />
                    </button>
                </div>
                <form onSubmit={handleCreateMaterial}>
                    {modalFields.map(({ name, type, placeholder, icon: Icon }) => (
                        <div
                            key={name}
                            className="flex border border-red-100 px-3 py-2.5 rounded-lg mb-2 
                    focus-within:ring-red-500 focus-within:ring-2 focus-within:border-red-500 
                    transition-all duration-200">
                            <Icon className="text-red-500 w-5 h-5 mr-2 top-0" />
                            {name === "text" ? (
                                <textarea
                                    placeholder={placeholder}
                                    value={modalData[name] || ""}
                                    onChange={(e) => setModalData({ ...modalData, [name]: e.target.value })}
                                    className="w-full focus:outline-none text-sm text-gray-700 resize 
                                    min-h-[2.5rem] min-w-80 max-h-80 max-w-dvh"
                                    rows={3}
                                    required
                                />
                            ) : (
                                <input
                                    type={type}
                                    placeholder={placeholder}
                                    value={modalData[name] || ""}
                                    onChange={(e) => setModalData({ ...modalData, [name]: e.target.value })}
                                    className="w-full focus:outline-none text-sm text-gray-700 overflow-visible"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <div className="flex gap-2 justify-end">
                        <button
                            className="bg-gradient-to-l from-gray-100 to-gray-200 px-4 text-gray-700 py-2.5
                rounded-lg cursor-pointer mt-2 flex gap-2 items-center justify-center text-sm font-semibold
                hover:shadow-md transition-all duration-200 border border-gray-700 max-w-60 flex-1"
                            onClick={closeModal}>
                            <XIcon />
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-gray-500 to-gray-900 px-4 text-white py-2.5
                rounded-lg cursor-pointer mt-2 flex gap-2 items-center justify-center text-sm font-semibold
                hover:shadow-md transition-all duration-200 max-w-60 flex-1">
                            <PlusIcon />
                            Add new text
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MaterialModal;
