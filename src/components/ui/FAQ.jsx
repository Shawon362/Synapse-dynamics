const FAQ = ({ title, subtitle, faqs }) => {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Subtle Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <svg width="1000" height="1000" viewBox="0 0 1000 1000" className="text-gray-200/50">
          <defs>
            <pattern id="faqPattern" width="64" height="64" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#faqPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Left-aligned) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Q&A List */}
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="grid grid-cols-12 gap-4">
              {/* Number Column */}
              <div className="col-span-12 md:col-span-1">
                <span className="text-3xl font-bold text-[#00b8db]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              {/* Text Column */}
              <div className="col-span-12 md:col-span-11 border-t-2 border-gray-100 pt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;