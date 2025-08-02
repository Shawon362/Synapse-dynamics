import aiAutomationImage from '/src/assets/images/ai-automation-hero.png'; 
import ServiceHero from '../components/ui/ServiceHero';
import TopRatedCompany from '../components/ui/TopRatedCompany';
// Import the icons you need for this specific page
import { GoWorkflow } from "react-icons/go";
import { BsBoxes, BsChatDots } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaLayerGroup, FaUsersCog } from "react-icons/fa";
import { IoCodeSlash, IoRocketOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import Services from '../components/ui/Services';
import Benefits from '../components/ui/Benefits';
import { BsCpu, BsGraphUp, BsShieldCheck, BsPersonCheck } from 'react-icons/bs';
import whyChooseUsImage from '/src/assets/images/whyChooseUsImage.png';
import whyChooseUsImageAnother from "/src/assets/images/whyChooseUsImg.png";
import Technologies from '../components/ui/Technologies';
// Technologies
import n8n from "/src/assets/images/n8n.png";
import rasa from "/src/assets/images/rasa.png";
import langchain from "/src/assets/images/langchain.png";
import openai from "/src/assets/images/openai.png";
import gemini from "/src/assets/images/gemini.png";
import python from "/src/assets/images/python.png";
import docker from "/src/assets/images/docker.png";
import pinecone from "/src/assets/images/pinecone.png";
import Testimonials from '../components/ui/Testimonials';
import FAQ from '../components/ui/FAQ';
import CTA from '../components/ui/CTA';
import { FiRefreshCw } from 'react-icons/fi';

const ShopifyAiAutomationPage = () => {
    // Top Rated Company Data
     const topRatedData = {
        title: "Top Rated AI Automation Company in Bangladesh",
        description: "A trusted AI Automation company based in Bangladesh, helping businesses implement smart AI-driven solutions to streamline operations, cut down manual tasks, and improve decision-making. We build automation that delivers results.",
        stats: [
            { value: 100, suffix: '+', label: 'AI Workflows Delivered' },
            { value: 20, suffix: '+', label: 'Clients Served Globally' },
            { value: 10, suffix: '+', label: 'Industries Served' },
            { value: 40, suffix: '+', label: 'Automation Experts Team' },
        ]
    };

    // Services Data
 const aiServicesData = [
        {
            icon: <GoWorkflow size={32} />,
            title: "AI Workflow Automation",
            description: "We build end-to-end workflows powered by AI models like GPT, Claude, or Google PaLM to automate content creation, decision logic, and routine communication."
        },
        {
            icon: <BsChatDots size={32} />,
            title: "AI Chatbot Development",
            description: "We create smart AI chatbots that can handle customer queries, qualify leads, and act as your 24/7 virtual assistant across web and mobile platforms."
        },
        {
            icon: <LiaFileInvoiceSolid size={32} />,
            title: "Document & Email Automation",
            description: "Automate processing of PDFs, invoices, and emails using AI and OCR. Extract key information, summarize data, and trigger actions instantly."
        },
        {
            icon: <FaUsersCog size={32} />,
            title: "Lead Scoring & Qualification Automation",
            description: "Use AI to qualify leads by analyzing user behavior, form responses, and CRM activity - making your sales process smarter and faster."
        },
        {
            icon: <IoCodeSlash size={32} />,
            title: "Custom GPT Integration",
            description: "Integrate OpenAI's GPT models into your tools to power AI writing, summarization, email replies, customer support, and much more."
        },
        {
            icon: <HiOutlineChartBar size={32} />,
            title: "AI-Powered Business Intelligence",
            description: "Turn raw data into insights using AI models. We build dashboards and tools that provide automated analysis and reports using natural language processing."
        },
    ];

    //Benefits Data
      const aiAutomationBenefits = {
        title: "Why Choose AI Automation for Your Business?",
        subtitle: "We combine cutting-edge technology with strategic expertise to deliver automation solutions that provide a clear return on investment.",
        imageUrl: whyChooseUsImage,
        benefits: [
            {
                icon: <BsCpu />,
                title: "Reduce Manual Workloads",
                description: "AI can automate repetitive, rule-based, or content-heavy tasks - freeing up your team to focus on strategic work."
            },
            {
                icon: <BsGraphUp />,
                title: "Faster & Smarter Decision Making",
                description: "With AI-powered insights and workflow triggers, your team can make more informed decisions - instantly and accurately."
            },
            {
                icon: <BsPersonCheck />,
                title: "Improved Customer Experience",
                description: "AI chatbots and automated responses reduce wait times and provide customers with real-time help - 24/7."
            },
            {
                icon: <BsShieldCheck />,
                title: "Scalable & Cost-Effective",
                description: "AI automation scales with your business needs while saving costs on manual resources and boosting long-term ROI."
            }
        ]
    };
     //Why Choose us Data
      const whyChooseUs = {
        title: "Why Choose Us for AI Automation?",
        subtitle: "We combine cutting-edge technology with strategic expertise to deliver automation solutions that provide a clear return on investment.",
        imageUrl: whyChooseUsImageAnother,
        benefits: [
            {
                icon: <FaLayerGroup />,
                title: "Full Stack AI Expertise",
                description: "From AI prompt engineering to back-end development and cloud hosting - we handle everything under one roof."
            },
            {
                icon: <BsBoxes />,
                title: "Custom Automation for Any Industry",
                description: "We've built AI automation for SaaS, Healthcare, E-commerce, Accounting, Education, and more. No matter your niche - we can automate it."
            },
            {
                icon: <IoRocketOutline />,
                title: "Rapid Prototyping & Deployment",
                description: "We work fast to build MVPs and full-scale AI automations - so you can test, iterate, and grow without long wait times."
            },
            {
                icon: <FiRefreshCw />,
                title: "Post-Launch Support & Scaling",
                description: "We don't stop after launch. Get ongoing support, performance monitoring, model tuning, and future upgrades as you grow."
            }
        ]
    };

    // Tech Data
    const techData = [
        {
            name: 'AI / ML',
            technologies: [
                { name: 'n8n', logoUrl: n8n},
                { name: 'Rasa', logoUrl: rasa},
                { name: 'LangChain', logoUrl: langchain},
                { name: 'OpenAI', logoUrl: openai },
                { name: 'Gemini', logoUrl: gemini},
            ]
        },
        {
            name: 'Data & DevOps',
            technologies: [
                { name: 'Python', logoUrl: python},
                { name: 'Docker', logoUrl: docker},
                { name: 'Pinecone', logoUrl: pinecone},
            ]
        }
    ];

    // Testimonials Data
     const testimonialData = [
        {
            text: "Mr. Mitul from InfyOm is an excellent person to work with and very experienced and professional. We had no problems whatsoever with them.",
            authorName: "Roy Singh",
            authorTitle: "Project Manager",
            avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            text: "Mitul is a rock star developer. He communicates and understands what you need and gets the job done. I highly recommend him and will hire again.",
            authorName: "Phillip Wright",
            authorTitle: "Startup Founder",
            avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            text: "The Laravel coding and results have a very high standard. He is excellent at solving complex requirements, dealing with complex web applications and APIs.",
            authorName: "Florian Hellberg",
            authorTitle: "Lead Developer",
            avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            text: "Fantastic as always. This guys simply knows his stuff. He goes above and beyond to deliver the project by buying in and ensuring that the project is a success.",
            authorName: "Rene Muhire",
            authorTitle: "Business Owner",
            avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            text: "Mitul is an outstanding programmer and completed this PHP/Laravel/MySQL project on schedule and on budget. Mitul was available to discuss progress every day.",
            authorName: "Ben McIntosh",
            authorTitle: "CTO",
            avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ];

    // FAQ Data
     const faqData = [
        {
            question: "What is an AI Agent?",
            answer: "An AI Agent is an advanced autonomous program designed to perceive its environment, make decisions, and perform specific tasks to achieve a set goal. Unlike simple programs, they can learn and adapt over time."
        },
        {
            question: "How is it different from traditional automation?",
            answer: "Traditional automation follows predefined, rigid rules (if X, then Y). AI Agents use machine learning and reasoning to handle complex, unpredictable situations, make judgments, and learn from outcomes."
        },
        {
            question: "Can I integrate AI Agents with my current tools?",
            answer: "Absolutely. We specialize in integrating AI Agents with your existing software stack, such as CRMs, ERPs, and other business tools, via APIs to ensure a seamless workflow."
        },
        {
            question: "Do you build voice-based agents?",
            answer: "Yes, we specialize in creating sophisticated voice-based AI agents. We leverage advanced speech-to-text, natural language processing (NLP), and text-to-speech technologies to build agents that can handle customer service calls, book appointments, and more."
        },
        {
            question: "Can I train agents on my business data?",
            answer: "Absolutely. In fact, training an AI agent on your specific business data is the key to making it highly effective and accurate for your unique needs. We ensure this process is secure and confidential."
        }
    ];

  return (
    <div>
      <ServiceHero
        title="AI Automation Services & Consulting"
        subtitle="Transform Your Business Processes with AI Automation - Boost Productivity, Reduce Costs, and Innovate Faster."
        features={['AI Strategy', 'Process Automation', 'Consulting', 'n8n Workflows']}
        imageUrl={aiAutomationImage}
      />
      <TopRatedCompany
        title={topRatedData.title}
        description={topRatedData.description}
        stats={topRatedData.stats}
      />
      <Benefits
        title={aiAutomationBenefits.title}
        subtitle={aiAutomationBenefits.subtitle}
        imageUrl={aiAutomationBenefits.imageUrl}
        benefits={aiAutomationBenefits.benefits}
     />
       <Services
        title="Our AI Automation Services"
        subtitle="Explore the specific AI-powered solutions we offer to transform your business operations."
        services={aiServicesData}
        />
        <Benefits
        title={whyChooseUs.title}
        subtitle={whyChooseUs.subtitle}
        imageUrl={whyChooseUs.imageUrl}
        benefits={whyChooseUs.benefits}
     />
         <Testimonials
            title="What Our Clients Say"
            subtitle="We pride ourselves on building strong relationships and delivering outstanding results. Here’s what our clients have to say about working with us."
            testimonials={testimonialData}
        />
        <Technologies
            title="Technologies We Use"
            subtitle="We leverage the best and latest technologies to build powerful, scalable, and intelligent solutions."
            categories={techData}
        />
         <FAQ
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our AI Agent development and automation services."
            faqs={faqData}
        />
            <CTA/>
    </div>
  );
};

export default ShopifyAiAutomationPage;