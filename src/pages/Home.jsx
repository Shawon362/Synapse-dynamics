import HeroSection from "../components/home/HeroSection";
import InteractiveProcess from "../components/home/InteractiveProcess";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TrustedBy/>
            <Services/>
            <InteractiveProcess/>
        </div>
    );
};

export default Home;