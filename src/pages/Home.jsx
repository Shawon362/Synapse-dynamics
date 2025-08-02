import Blogs from "../components/home/Blogs";
import CTA from "../components/ui/CTA";
import HeroSection from "../components/home/HeroSection";
import InteractiveProcess from "../components/home/InteractiveProcess";
import Portfolio from "../components/home/Portfolio";
import TrustedBy from "../components/home/TrustedBy";
import VoiceAgents from "../components/home/VoiceAgents";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/ui/Services";
// Import the icons you need for this specific page
import { LuBrainCircuit } from "react-icons/lu";
import { GoWorkflow } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const Home = () => {
    // Services Data
    const aiServicesData = [
            {
                icon: <LuBrainCircuit size={32} />,
                title: "AI Automation",
                description: "Transform your business with our AI Automation Services. Leverage cutting-edge technology to streamline operations and enhance productivity."
            },
            {
                icon: <GoWorkflow size={32} />,
                title: "n8n Workflow",
                description: "Streamline your processes with our Workflow Automation Services. Boost efficiency and productivity with our tailored automation solutions."
            },
            {
                icon: <RiRobot2Line size={32} />,
                title: "AI Agent Development",
                description: "Build smarter AI agents to transform experiences and operations with our expertise in automation and conversational AI."
            },
            {
                icon: <BsChatDots size={32} />,
                title: "ChatBot Development",
                description: "Tailor-Made ChatBot Solutions to meet your unique needs. We bring Conversational UIs to your products with great user experience."
            },
            {
                icon: <FaLaravel size={32} />,
                title: "Voice AI Development",
                description: "Robust and scalable web applications with Voice AI. Elevate your web presence with our custom Voice AI solutions tailored for performance and growth."
            },
            {
                icon: <IoCodeSlash size={32} />,
                title: "Generative AI",
                description: "Jump start your projects with our Pre-Built Scripts. Save time and resources with our high-quality, customizable scripts, available on Envato."
            },
        ];
    
    return (
        <div>
            <HeroSection />
            <TrustedBy/>
            <InteractiveProcess/>
            <Services
                title="Services We Offer"
                subtitle="Discover our comprehensive range of solutions designed to elevate your business."
                services={aiServicesData}
            />
            <VoiceAgents/>
            <WhyChooseUs/>
            <Portfolio/>
            <Blogs/>
            <CTA/>
        </div>
    );
};

export default Home;