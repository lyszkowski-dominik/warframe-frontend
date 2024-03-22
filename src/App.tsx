import "./App.css";

import { Route, Routes } from "react-router";
// import MainPage from "./pages/MainPage";
import Available from "./pages/Available";
import MenuBar from "./components/MenuBar";
import Search from "./pages/Search";

function App() {
  return (
    <>
      {/* setup routing */}
      <MenuBar />
      <Routes>
        <Route path="/" element={<Available />} />
        {/* <Route path="/available" element={<Available />} /> */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
