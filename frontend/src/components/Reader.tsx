import type { Material } from "@mikiri/types";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

type ReaderProps = { materials: Material[] };

const Reader = ({ materials }: ReaderProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const currentMaterial = materials.find((mat) => mat._id === id || mat.id === id);

    return (
        <div className="p-8">
            {/* CONTROLS */}
            <div className="border-b mb-4 pb-4">
                <ArrowLeft onClick={() => navigate(-1)} className="w-6 h-6 cursor-pointer" />
            </div>
            <h1 className="mb-8 text-2xl font-semibold font-mono">{currentMaterial?.title}</h1>
            <p className="font-medium text-lg">{currentMaterial?.content}</p>
        </div>
    );
};

export default Reader;
