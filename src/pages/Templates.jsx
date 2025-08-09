import React, { useState, useEffect } from 'react';
import { FiSearch, FiCode, FiUsers, FiMessageSquare, FiShoppingCart, FiBriefcase, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const allTemplates = [
  {
    id: 1,
    title: 'Website Lead Collection & CRM Enrichment',
    category: 'Sales',
    icon: <FiBriefcase className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+1',
  },
  {
    id: 2,
    title: 'Parse Resume to Airtable',
    category: 'Recruiting',
    icon: <FiUsers className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+2',
  },
  {
    id: 3,
    title: 'Candidate Interview Calendar Booking',
    category: 'Recruiting',
    icon: <FiUsers className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+3',
  },
  {
    id: 4,
    title: 'Shopify New Order Notification to Slack',
    category: 'E-Commerce',
    icon: <FiShoppingCart className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+4',
  },
  {
    id: 5,
    title: 'Automate Backup of Critical Workflows',
    category: 'Productivity',
    icon: <FiCode className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+5',
  },
  {
    id: 6,
    title: 'Twitter Keyword Monitoring & Alerting',
    category: 'Social Media',
    icon: <FiMessageSquare className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+6',
  },
  {
    id: 7,
    title: 'RAG ChatBot for Website',
    category: 'AI / Chat',
    icon: <FiMessageSquare className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+7',
  },
  {
    id: 8,
    title: 'Personal Appointment Booking Voice AI Agent',
    category: 'AI / Chat',
    icon: <FiMessageSquare className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+8',
  },
  {
    id: 9,
    title: 'AI Resume Avatar Video Generator',
    category: 'AI / Chat',
    icon: <FiMessageSquare className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+9',
  },
   {
    id: 10,
    title: 'Automated Social Media Posting',
    category: 'Social Media',
    icon: <FiMessageSquare className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+10',
  },
  {
    id: 11,
    title: 'Sales Funnel Automation',
    category: 'Sales',
    icon: <FiBriefcase className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+11',
  },
  {
    id: 12,
    title: 'Customer Support Ticket Routing',
    category: 'Support',
    icon: <FiUsers className="text-white" />,
    imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=Workflow+12',
  },
];

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter templates based on search term (case-insensitive)
  const filteredTemplates = allTemplates.filter(template =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset to first page whenever search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // --- Pagination Logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTemplates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-1.5 w-20 bg-cyan-500 mb-4 rounded mx-auto"></div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Ready to use Automation Templates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Automate your work from start to finish. Explore our templates and create powerful, unstoppable solutions in minutes—no code needed.
          </p>
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a template..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full bg-white border border-gray-300 rounded-full py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
            {currentItems.map(template => (
              <div 
                key={template.id} 
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                    <img 
                        src={template.imageUrl} 
                        alt={template.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 shadow-md">
                        {template.icon}
                    </div>
                    <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-tight h-14">
                    {template.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Handle No Results */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-16">
              <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No templates found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any templates matching your search. Try a different keyword.
              </p>
            </div>
          )}

           {/* Functional Pagination */}
           {totalPages > 1 && (
             <div className="mt-16 flex justify-center">
                  <nav className="flex items-center space-x-2" aria-label="Pagination">
                      <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <FiChevronLeft className="h-5 w-5" />
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                          <button
                              key={number}
                              onClick={() => paginate(number)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                                  currentPage === number
                                      ? 'z-10 bg-cyan-500 border-cyan-500 text-white'
                                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                              }`}
                          >
                              {number}
                          </button>
                      ))}
                      <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <FiChevronRight className="h-5 w-5" />
                      </button>
                  </nav>
              </div>
           )}
        </div>
      </section>
    </div>
  );
};

export default Templates;