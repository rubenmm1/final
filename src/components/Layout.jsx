import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";


export default function Layout() {
    return (
    <>
        <Header />
        <Aside />
        <main>
            <Outlet />
        </main>
    </>
    );
}
