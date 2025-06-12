import type { User } from "@mikiri/types";
import { Sparkles } from "lucide-react";
type SidebarProps = {
    user: User | null;
};

function Sidebar({ user }: SidebarProps) {
    return (
        <>
            <div
                className="hidden md:flex flex-col fixed h-full w-20 lg:w-64 bg-white/90 backdrop-blur-sm border-r 
            border-slate-100 shadow-sm z-20 transition-all duration-300">
                <div className="p-5 border-b border-red-100 lg:block hidden">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-700
                        flex items-center justify-center text-white font-bold shadow-md">
                            HE
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Hey, {user?.name}</h2>
                            <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> Let's read something
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 space-y-6 overflow-y-auto flex-1"></div>
            </div>
        </>
    );
}

export default Sidebar;
