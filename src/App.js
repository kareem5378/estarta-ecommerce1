//Imports
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

//Store import
import store from "./store/store";

//Navbar import
import Navbar from "./pages/navbar";

//Lazy imports
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/notFound"));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback="Loading .....">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginpage" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
