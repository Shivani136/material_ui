import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Header from '../Component/Header';
//import NoPage from "./pages/NoPage";

export default function route() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<route />, document.getElementById("root"));