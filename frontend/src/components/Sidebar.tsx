import React from "react";

type SidebarProps = {
    user: {
        email: string;
        name: string;
        avatar: string;
    } | null;
};

function Sidebar({ user }: SidebarProps) {
    return <div>Sidebar</div>;
}

export default Sidebar;
