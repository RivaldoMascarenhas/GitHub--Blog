import { Outlet } from "react-router-dom";
import { ContainerComponents, Logo } from "./styles";
export function DefaultLaout() {
    return (
        <div>
            <Logo />
            <ContainerComponents>
                <Outlet />
            </ContainerComponents>
        </div>
    )
}