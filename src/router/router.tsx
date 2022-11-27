import { Route, Routes } from "react-router-dom";
import { DefaultLaout } from "../layout/default";
import { Home } from "../pages/home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLaout />}>
                <Route path="/" element=
                    {<Home />} />
            </Route>
        </Routes>
    )
}