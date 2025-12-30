
import React, { useState, useRef } from 'react';
import MainLayout from '../layout/MainLayout';
import { Eye, Rabbit } from 'lucide-react';
import TestimonialsSection from '../sections/TestimonialsSection';
import FocusCard from '../cards/FocusCard';
import PricingCard from '../cards/PricingCard';

const ServicePageTemplate = ({
    pageTitle,
    heroSubtitle,
    focusTitle,
    focusItems,
    servicesTitle,
    servicesSubtitle,
    pricingCategories
}) => {
    const [activeTab, setActiveTab] = useState('corporate');
    const scrollContainerRef = useRef(null);
    const categoryRefs = useRef({
        corporate: null,
        umkm: null,
        student: null,
        personal: null // Just in case
    });

    const setCategoryRef = (category, el) => {
        categoryRefs.current[category] = el;
    };

    const handleTabClick = (category) => {
        setActiveTab(category);
        const ref = categoryRefs.current[category];
        if (ref && scrollContainerRef.current) {
            const containerLeft = scrollContainerRef.current.getBoundingClientRect().left;
            const itemLeft = ref.getBoundingClientRect().left;
            const offset = itemLeft - containerLeft + scrollContainerRef.current.scrollLeft;

            scrollContainerRef.current.scrollTo({
                left: offset - 24, // 24px padding/margin adjustment
                behavior: 'smooth'
            });
        }
    };

    // Extract available categories from the pricingCategories object
    const availableCategories = Object.keys(pricingCategories);

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="pt-10 pb-20 px-4 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb / Top Nav Placeholder */}
                    <div className="flex justify-center gap-8 text-sm text-blue-300 font-medium mb-12 bg-white/50 inline-block p-2 rounded-full border border-blue-50 mx-auto">
                        <div className="flex items-center gap-4 px-4 py-1">
                            <span className="font-bold text-blue-600">Ditz</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-12">{pageTitle}</h1>

                    {/* Main Illustration Area */}
                    <div className="max-w-4xl mx-auto mb-12 relative">
                        <div className="aspect-[2/1] md:aspect-[5/2] flex items-center justify-center">
                            {/* Placeholder content approximating the illustration layout */}
                            <img src="/placeholder-illustration.svg" alt="Illustration" className="w-full h-full object-contain opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-gray-300 text-lg">Use your SVG illustration here</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-blue-400 font-medium max-w-xl mx-auto mb-20 leading-relaxed">
                        {heroSubtitle}
                    </p>

                    <div className="w-12 h-12 mx-auto text-blue-300 mb-8 opacity-50">
                        <Eye size={48} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-16 max-w-3xl mx-auto leading-tight">
                        {focusTitle}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left mb-24">
                        {focusItems.map((item, idx) => (
                            <FocusCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services / Pricing Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="w-12 h-12 mx-auto text-blue-300 mb-4 opacity-50">
                            <Rabbit size={48} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">{servicesTitle}</h2>
                        <p className="text-blue-300 mb-8">
                            {servicesSubtitle}
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex bg-white border border-blue-100 rounded-full p-1 mb-12 shadow-sm flex-wrap justify-center">
                            {availableCategories.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all capitalize ${activeTab === tab
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'text-gray-400 hover:text-blue-500'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Pricing - Full Width Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-8 px-4 md:px-8 lg:px-24 snap-x hide-scrollbar scroll-smooth"
                >
                    {availableCategories.map((category) => (
                        <div
                            key={category}
                            ref={(el) => setCategoryRef(category, el)}
                            className="flex gap-8 shrink-0"
                        >
                            {pricingCategories[category].map((item, idx) => (
                                <div key={`${category}-${idx}`} className="w-[350px] md:w-[400px] snap-center shrink-0">
                                    <PricingCard {...item} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Reuse Testimonials */}
            <TestimonialsSection />
        </MainLayout>
    );
};

export default ServicePageTemplate;
