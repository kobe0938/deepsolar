import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import ComparisionMap from "./pages/ComparisionMap/ComparisionMap";
import Contact from "./pages/Contact/Contact";
import DataAnalytics from "./pages/DataAnalytics/DataAnalytics";
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

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics,logEvent } from "firebase/analytics";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcyshqv9oekSsI9buq-MKRZq1Cst_ATog",
  authDomain: "deepsolarfirebase.firebaseapp.com",
  projectId: "deepsolarfirebase",
  storageBucket: "deepsolarfirebase.appspot.com",
  messagingSenderId: "416931051240",
  appId: "1:416931051240:web:54c30155250d8f7fd0bb5d",
  measurementId: "G-C58KLSCLJ6"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

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

            <Route path="/comparisonMap" element={<ComparisionMap/>} />

            <Route path = "/dataAnalytics" element = {<DataAnalytics/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
