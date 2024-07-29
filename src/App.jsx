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
import Notice from "./pages/Notice";
import Testimonial from "./pages/Testimonial";
import CreativeWeek from "./pages/CreativeWeek";
import ThreeDGallery from "./components/ThreeDGallery";
import BannerImg from "./components/BannerImg";
import GetNotices from "./components/GetNotices";

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
          <Route path="/banner-img" element={<BannerImg />} />

          <Route path="/threeD" element={<ThreeD />} />
          <Route path="/get3d-photos" element={<ThreeDGallery />} />


          {/* Banner Gallery end  */}



          {/* last area section start*/}
          <Route path="/important-notice" element={<Notice />} />
          <Route path="/get-notice" element={<GetNotices />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/creative-week" element={<CreativeWeek />} />
          {/* last area section end*/}
 

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
