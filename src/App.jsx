import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import ToastMsg from "./components/ToastMsg";

function App() {
  // const { currentUser } = useContext(AuthContext);

  return (
    <>
      {/* <ToastMsg /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route Exact path="/login" element={<Login />} />
          <Route Exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
