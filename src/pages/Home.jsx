import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TrustedBy/>
            <Services/>
        </div>
    );
};

export default Home;