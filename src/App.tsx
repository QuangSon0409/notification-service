import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      {/* <Login /> */}
    </>
  );
}

export default App;
