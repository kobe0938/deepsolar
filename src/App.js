import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import HeaderStyleFive from "./pages/HeaderStyleFive/HeaderStyleFive";
import HeaderStyleFour from "./pages/HeaderStyleFour/HeaderStyleFour";
import HeaderStyleSeven from "./pages/HeaderStyleSeven/HeaderStyleSeven";
import HeaderStyleSix from "./pages/HeaderStyleSix/HeaderStyleSix";
import Home from './pages/Home/Home';
import HomeThree from "./pages/HomeThree/HomeThree";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import InteractiveMap from "./pages/InteractiveMap/InteractiveMap";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
        <Routes>
            <Route path="/" element={<HomeTwo/>} />
            <Route path="/home" element={<HomeTwo/>} />
            {/* <Route path="/homeTwo" element={<HomeTwo/>} />
            <Route path="/homeThree" element={<HomeThree/>} /> */}
            {/* <Route path="/headerStyleFour" element={<HeaderStyleFour/>} />
            <Route path="/headerStyleFive" element={<HeaderStyleFive/>} />
            <Route path="/headerStyleSix" element={<HeaderStyleSix/>} />
            <Route path="/headerStyleSeven" element={<HeaderStyleSeven/>} /> */}
            {/* <Route path="/about" element={<About/>} /> */}
            {/* <Route path="/services" element={<Services/>} />
            <Route path="/servicesDetails" element={<ServicesDetails/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/portfolioDetails" element={<PortfolioDetails/>} /> */}
            <Route path="/team" element={<Team/>} />
            {/* <Route path="/teamDetails" element={<TeamDetails/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogDetails" element={<BlogDetails/>} /> */}
            <Route path="/contact" element={<Contact/>} />

            <Route path = "/interactiveMap" element={<InteractiveMap/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
