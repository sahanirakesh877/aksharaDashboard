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
import { Toaster } from "react-hot-toast";
import GetBlogs from "./components/getBlogs";
import GetBlog from "./components/getBlog";
import GetActivities from "./components/getActivities";
import GetActivity from "./components/getActivity";

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
          <Route path="/get-blogs" element={<GetBlogs />} />
          <Route path="/get-blogs/:id" element={<GetBlog />} />
          <Route path="/get-blogs/:id/edit" element={<Blog edit={true} />} />
          <Route
            path="/get-blogs/:id/reupload"
            element={<Blog reupload={true} />}
          />
          {/* blogs end */}

          {/* activities start */}
          <Route path="/activity-blog" element={<ActivityBlog />} />
          <Route path="/get-activities" element={<GetActivities />} />
          <Route path="/get-activities/:id" element={<GetActivity />} />
          <Route
            path="/get-activities/:id/edit"
            element={<ActivityBlog edit={true} />}
          />
          <Route
            path="/get-activities/:id/reupload"
            element={<ActivityBlog reupload={true} />}
          />

          {/* activities end */}

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

          {/* last area section start*/}
          <Route path="/important-notice" element={<Notice />} />
          <Route path="/get-notice" element={<GetNotices />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/creative-week" element={<CreativeWeek />} />
          {/* last area section end*/}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Toaster />
      <Footer />
    </>
  );
};

export default App;
