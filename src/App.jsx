import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Main from "./pages/Main";
import DetailSalad from "./components/DetailSalad";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/salad/:name" element={<DetailSalad />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
