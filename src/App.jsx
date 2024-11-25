import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShimmerEffect from "./Components/Loader/ShimmerEffect";
import Footer from "./Components/Footer/Footer";
import FooterPopUp from "./Components/FooterPopUP/FooterPopUp";


// Lazy loading for pages
const Home = lazy(() => import("./Pages/Home/Home"));
const UnderstandingESR1Mutations = lazy(() => import("./Pages/Understanding-esr1-mutations/Understanding_esr1_mutations"));
const TakingOrserdu = lazy(() => import("./Pages/Taking_orserdu/Taking_orserdu"));
const HelpfulResources = lazy(() => import("./Pages/Helpful_resources/Helpful_resources"));
const SavingAndSupport = lazy(() => import("./Pages/Savings_and_Support/Saving_and_Support"));
const RealStories = lazy(() => import("./Pages/Real_Stories/Real_Stories"));
const OrserduSafety = lazy(() => import("./Pages/Orserdu_safety/Orserdu_safety"));
const OrserduResults=lazy(()=>import ("./Pages/Orserdu_results/Orserdu_results"))

function App() {

 


  return (
    <Router >
      <Navbar />
      <Suspense fallback={<ShimmerEffect/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/understanding-esr1-mutations" element={<UnderstandingESR1Mutations />} />
          <Route path="/taking-orserdu" element={<TakingOrserdu />} />
          <Route path="/helpful-resources" element={<HelpfulResources />} />
          <Route path="/savings-and-support" element={<SavingAndSupport />} />
          <Route path="/real-stories" element={<RealStories />} />
          <Route path="/orserdu-safety" element={<OrserduSafety />} />
          <Route path="/orserdu-results" element={<OrserduResults />} />



        </Routes>
      </Suspense>
      {/* <FooterPopUp/> */}
      <Footer/>
    </Router>
  );
}

export default App;
