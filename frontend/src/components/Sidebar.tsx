import type { User } from "@mikiri/types";

type SidebarProps = {
    user: User | null;
};

function Sidebar({ user }: SidebarProps) {
    return <div>Sidebar</div>;
}

export default Sidebar;
