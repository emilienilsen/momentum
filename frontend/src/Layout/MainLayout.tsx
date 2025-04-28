import { Outlet } from "react-router-dom";
import {TopBar} from "../Topbar.tsx";
import {BottomNavBar} from "../NavBar.tsx";


export function MainLayout() {
    return (
        <>
            <TopBar />
            <Outlet />
            <BottomNavBar />
        </>
    );
}
