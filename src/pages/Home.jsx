import Blogs from "../components/home/Blogs";
import CTA from "../components/home/CTA";
import HeroSection from "../components/home/HeroSection";
import InteractiveProcess from "../components/home/InteractiveProcess";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";
import VoiceAgents from "../components/home/VoiceAgents";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TrustedBy/>
            <InteractiveProcess/>
            <Services/>
            <VoiceAgents/>
            <WhyChooseUs/>
            <Portfolio/>
            <Blogs/>
            <CTA/>
        </div>
    );
};

export default Home;