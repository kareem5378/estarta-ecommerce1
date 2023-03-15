//Imports
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { checkValidation } from "./reducers/Auth/action";
import { useDispatch } from "react-redux";

//Import components
import Navbar from "./pages/navbar";
import ProtectedRoutes from "./pages/protectedRoutes";
import Spinner from "./pages/spinner";

//Lazy imports
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/notFound"));
const Products = lazy(() => import("./pages/products"));

function App() {
  const { isAuth, loading } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (isAuth)
      dispatch(checkValidation()).then((res) => {
        if (!res) nav("/login");
      });
  }, [isAuth]);

  if (loading) return <Spinner />;
  return (
    <div className="App">
      <Suspense fallback="Loading .....">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={<ProtectedRoutes component={<Products />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
