import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";


export default function Home() {
  return (
   <main className="flex min-h-screen flex-col 
   bg-[#121212]">
    <Navbar/>
    <div className=" container mt-24 mx-auto px-12 py-4">
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    <EmailSection/>
  
  
    </div>
   </main>
  );
}
