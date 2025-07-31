import { Routes, Route, Outlet } from 'react-router-dom';

// Import your layout and page components
// import ServicesPage from './pages/ServicesPage';
// import AboutUsPage from './pages/AboutUsPage';
// import PortfolioPage from './pages/PortfolioPage';
// import InsightsPage from './pages/InsightsPage';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';

// Create a Layout component to hold the Header and Footer
// The <Outlet /> component will render the current page
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      {/* All pages will now use the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* The default page shown at the "/" path */}
        <Route index element={<Home />} /> 
        
        {/* Your other pages */}
        {/* <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="insights" element={<InsightsPage />} /> */}

        {/* Optional: Add a 404 Not Found page */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}
