import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./utils";
import { Layout } from "./components";
import { routes } from "./utils";

const renderRoutes = (route: RouteList) => {
    const arr = [];
    arr.push(<Route path={route.path} key={route.path} element={route.element} />);
    return arr;
};
function App() {

    return (
        <div className="body">
            <Routes>
                {routes.map((it) => {
                    if (it.isPublic) {
                        return (
                            <Route
                                path={it.path}
                                key={it.path}
                                element={<Layout />}
                            >
                                {renderRoutes(it)}
                            </Route>
                        );
                    } else {
                        return (
                            <Route element={<RequireAuth />} key={it.path}>
                                {renderRoutes(it)}
                            </Route>
                        );
                    }
                })}
            </Routes>
        </div>
    );
};

export default App
