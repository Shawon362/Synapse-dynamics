import { FiTarget, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';
import profile1 from "/src/assets/images/profile1.png";
import profile2 from "/src/assets/images/profile2.png";
import profile3 from "/src/assets/images/profile3.png";
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Co-Founder & CEO',
    imageUrl: profile3,
    bio: 'Jane is a visionary leader with over 15 years of experience in the tech industry, driving innovation and growth.'
  },
  {
    name: 'John Smith',
    role: 'Co-Founder & CTO',
    imageUrl: profile2,
    bio: 'John is the technical mastermind behind our platform, with a passion for building scalable and robust solutions.'
  },
  {
    name: 'Emily White',
    role: 'Head of Product',
    imageUrl: profile1,
    bio: 'Emily leads our product strategy, ensuring we create tools that customers love and rely on every day.'
  },
];

// Values data for the new section
const values = [
    {
        icon: <FiTarget size={28} className="text-cyan-500" />,
        title: 'Customer-Centric',
        description: 'We succeed when our customers succeed. Their challenges are our challenges, and their success is our ultimate goal.'
    },
    {
        icon: <FiTrendingUp size={28} className="text-cyan-500" />,
        title: 'Innovation',
        description: 'We constantly push boundaries, embrace new ideas, and leverage technology to create better solutions.'
    },
    {
        icon: <FiUsers size={28} className="text-cyan-500" />,
        title: 'Collaboration',
        description: 'Our greatest strength is our team. We foster a supportive environment where diverse minds work together.'
    },
    {
        icon: <FiHeart size={28} className="text-cyan-500" />,
        title: 'Integrity',
        description: 'We operate with transparency and honesty, building trust with our customers, partners, and each other.'
    }
]

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-20 sm:py-28 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-2xl opacity-50 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-2xl opacity-50 translate-x-1/2"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="h-1.5 w-20 bg-cyan-500 mb-4 rounded mx-auto"></div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                        We're Building the Future of Digital Interaction
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                        From our humble beginnings in Cumilla, we've grown into a passionate team dedicated to solving complex problems with elegant, human-centered solutions.
                    </p>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            The Principles That Guide Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our values are not just words; they are the core of our culture and the foundation of every decision we make.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {values.map((value) => (
                            <div key={value.title} className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 mx-auto">
                                    {value.icon}
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">{value.title}</h3>
                                <p className="mt-2 text-base text-gray-500">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="h-1.5 w-20 bg-cyan-500 mb-4 rounded mx-auto"></div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Meet Our Leadership Team
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            The driving force behind our innovation and success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="group text-center">
                                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                     <img 
                                        className="h-full w-full object-cover" 
                                        src={member.imageUrl} 
                                        alt={`Portrait of ${member.name}`}
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/a3a3a3/ffffff?text=Error'; }}
                                    />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-cyan-600 font-medium">{member.role}</p>
                                <p className="mt-2 text-base text-gray-500 px-4">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;