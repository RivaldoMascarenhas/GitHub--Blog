import { Route, Routes } from "react-router-dom";
import { DefaultLaout } from "../layout/default";
import { Home } from "../pages/home";
import { Post } from "../pages/post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLaout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
}
