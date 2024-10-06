

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import Write from "./pages/Write";
import Post from "./components/Post"
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element = {<AboutUs/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post" element={<Post />} />
          <Route path="categories" element={<Categories />} />
          <Route path="write" element={<Write />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);