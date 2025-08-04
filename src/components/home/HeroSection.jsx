import { TbShieldCheckFilled } from 'react-icons/tb';
import heroImageFirst from "/src/assets/images/heroImage01.png";
import heroImageSecond from "/src/assets/images/heroImage02.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-500 rounded-full opacity-50"></div>
            </div>

            <div className="container relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="max-w-xl animate-fadeInUp">
                        <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                            AI AUTOMATION
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            AI-Powered <span className='text-[#00b8db]'>Automation</span> for Modern Businesses
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                            Driving Innovation Through Smart, Scalable AI Automation Solutions for Visionary SaaS and SMBs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            {/* Primary Button */}
                            <Link to="/contact" className="w-full sm:w-auto bg-[#00b8db] text-white px-6 py-3 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg hover:bg-opacity-90">
                                Get Free Consultation
                            </Link>
                            {/* Secondary Button */}
                            <button className="w-full sm:w-auto bg-transparent border border-[#00b8db] text-[#00b8db] hover:bg-[#00b8db] hover:text-white px-6 py-3 rounded-lg font-medium transition duration-200">
                                Watch Demo
                            </button>
                        </div>
                         <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                            <div className="flex items-center text-gray-600">
                                <TbShieldCheckFilled className="h-5 w-5 text-[#00b8db]" />
                                <span className="ml-2 text-sm">Secure & Reliable</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <TbShieldCheckFilled className="h-5 w-5 text-[#00b8db]" />
                                <span className="ml-2 text-sm">24/7 Support</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <TbShieldCheckFilled className="h-5 w-5 text-[#00b8db]" />
                                <span className="ml-2 text-sm">Scalable Solutions</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Image & SVG Composition (FIXED) */}
                    <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                        <div>
                             {/* Image 1 */}
                        <div className="absolute top-0 left-0 lg:right-0 lg:left-auto w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img src={heroImageFirst} alt="Team collaboration" className="w-full h-full object-cover" />
                        </div>
                        {/* Image 2 (Position Fixed) */}
                        <div className="absolute bottom-8 left-32 lg:right-40 lg:left-auto w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img src={heroImageSecond} alt="Advanced robotics" className="w-full h-full object-cover" />
                        </div>
                        </div>
                        {/* SVG Waves */}
                        <div className="absolute bottom-16 right-0 left-0 lg:right-16 lg:left-auto w-24 h-16 opacity-40">
                            <svg viewBox="0 0 100 40" className="w-full h-full text-gray-400 animate-pulse">
                                <path d="M0 20 Q25 10 50 20 T100 20" stroke="currentColor" strokeWidth="2" fill="none"></path>
                                <path d="M0 25 Q25 15 50 25 T100 25" stroke="currentColor" strokeWidth="1.5" fill="none"></path>
                                <path d="M0 30 Q25 20 50 30 T100 30" stroke="currentColor" strokeWidth="1" fill="none"></path>
                            </svg>
                        </div>
                        <div className="absolute top-16 left-0 sm:left-16 w-3 h-3 bg-cyan-400 rounded-full opacity-60"></div>
                        <div className="absolute top-24 left-8 sm:left-32 w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
                        <div className="absolute bottom-32 right-8 w-4 h-4 bg-cyan-300 rounded-full opacity-40"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
