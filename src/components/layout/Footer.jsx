import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube, FaInstagram, FaPhoneAlt} from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { BsChatDotsFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { GiOverInfinity } from 'react-icons/gi';

const Footer = () => {
    const footerLinks = [
        {
            title: 'Company',
            links: ['About Us', 'Contact Us', 'Career', 'Case Studies', 'Open Source', 'Blog']
        },
        {
            title: 'Solutions',
            links: ['AI Automation Templates', 'Custom ChatGPT ChatBot', 'Digital Business Card', 'Hospital Management', 'POS System', 'Clinic Management']
        },
        {
            title: 'Services',
            links: ['AI Automation Services', 'Workflow Automation Services', 'AI Agent Development', 'Shopify AI Automation', 'Custom ChatBot Development', 'Laravel Development']
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaFacebook />, url: '#' },
        { icon: <RiTwitterXFill />, url: '#' },
        { icon: <FaGithub />, url: '#' },
        { icon: <FaYoutube />, url: '#' },
        { icon: <FaInstagram />, url: '#' },
    ];

    // Get the current year for the copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Column 1: Logo, Tagline, and Socials */}
                    <div className="lg:col-span-1">
                        <NavLink to="/" className="inline-flex items-center gap-2 mb-4">
                             <GiOverInfinity className="text-5xl text-[#00b8db]" />
                             <span className="text-2xl font-bold text-white">YourBrand</span>
                        </NavLink>
                        <p className="text-gray-400 max-w-xs">
                            Pioneering AI-powered automation solutions for modern businesses worldwide.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.url} className="text-gray-400 hover:text-[#00b8db] transition-colors">
                                    <span className="text-2xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns 2, 3, 4: Navigation Links */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.map((column) => (
                            <div key={column.title}>
                                <h3 className="text-white font-semibold mb-4 tracking-wider uppercase">{column.title}</h3>
                                <ul className="space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link}>
                                            <NavLink to="#" className="text-gray-400 hover:text-[#00b8db] hover:underline transition-colors">
                                                {link}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="border-t border-slate-800 mt-12 pt-8">
                     <h3 className="text-white font-semibold mb-4 tracking-wider uppercase">Contact - Bangladesh</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                        <div className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#00b8db] text-xl mt-1 flex-shrink-0" />
                            <span>Kandirpar, Cumilla 3500<br/>Chittagong Division, Bangladesh</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <FaPhoneAlt className="text-[#00b8db] text-xl mt-1 flex-shrink-0" />
                            <div>
                                 <p>
                                    Sales / Product Inquiry: 
                                    <Link to="tel:+8801712345678" className="hover:text-[#00b8db] hover:underline"> +880 171 234 5678</Link>
                                </p>
                                <p>
                                    Career: 
                                    <Link to="tel:+8801819876543" className="hover:text-[#00b8db] hover:underline"> +880 181 987 6543</Link>
                                </p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <FaEnvelope className="text-[#00b8db] text-xl mt-1 flex-shrink-0" />
                            <Link to="mailto:contact@yourcompany.com.bd" className="hover:text-[#00b8db] hover:underline">contact@yourcompany.com.bd</Link>
                        </div>
                     </div>
                </div>

            </div>

            {/* Sub-Footer */}
            <div className="bg-slate-950 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;