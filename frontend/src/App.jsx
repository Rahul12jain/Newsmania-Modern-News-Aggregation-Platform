import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Login from "./pages/Login";
import Trending from "./pages/Trending";
import ArticleDetails from "./pages/ArticleDetails";



function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="sports" element={<Sports />} />
        <Route path="technology" element={<Technology />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="health" element={<Health />} />
        <Route path="login" element={<Login mode="signin" />} />
        <Route path="signup" element={<Login mode="signup" />} />
        <Route path="trending" element={<Trending />} />

        <Route path="article/:id" element={<ArticleDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
