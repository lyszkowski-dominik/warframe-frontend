import "./App.css";

import { Route, Routes } from "react-router";
// import MainPage from "./pages/MainPage";
import Available from "./pages/Available";
import MenuBar from "./components/MenuBar";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      {/* setup routing */}
      <div>
        <MenuBar />{" "}
        <Routes>
          <Route path="/" element={<Available />} />
          {/* <Route path="/available" element={<Available />} /> */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
