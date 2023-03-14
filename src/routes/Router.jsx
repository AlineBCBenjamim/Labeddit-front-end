import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default Router;