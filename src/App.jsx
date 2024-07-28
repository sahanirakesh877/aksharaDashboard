import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import ActivityBlog from "./pages/ActivityBlog";
import BannerPhotos from "./pages/BannerPhotos";
import ThreeD from "./pages/ThreeD";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          {/* authentication start */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* authentication end */}

          {/* blogs start */}
          <Route path="/latest-blog" element={<Blog />} />
          <Route path="/activity-blog" element={<ActivityBlog />} />
          {/* blogs end */}

          {/* Banner Gallery start  */}
          <Route path="/banner-photo" element={<BannerPhotos />} />
          <Route path="/threeD" element={<ThreeD />} />

          {/* Banner Gallery end  */}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
