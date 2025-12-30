
import React from 'react';
import problemSectionSvg from "../../img/problemSection.svg"; // Import SVG file
import { problemsData } from '../../data/landingPage';

// Component untuk setiap problem statement
const ProblemCard = ({ svgIcon, text }) => (
    <div className="flex items-start gap-4 border-b border-dashed border-blue-500 pb-4 mb-4">
        <span
            className="flex-shrink-0 mt-1"
            dangerouslySetInnerHTML={{ __html: svgIcon }}
        />
        <p className="text-blue-500 leading-relaxed">{text}</p>
    </div>
);

// Main component - Renamed for consistency
const ProblemsSection = () => {
    return (
        <div className="flex max-w-7xl mx-auto bg-transparent shadow-none rounded-lg overflow-hidden gap-12 mt-20 mb-20 px-4 md:px-0 flex-col md:flex-row">
            {/* Kiri - Gambar */}
            <div className="flex-shrink-0 mt-12 mb-12 flex justify-center md:block">
                <img
                    src={problemSectionSvg}
                    alt="Problem Section Illustration"
                    width={454}
                    height={290}
                    className="object-cover"
                />
            </div>

            {/* Kanan - Title + Problem Statements */}
            <div className="flex flex-col p-6 flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">{problemsData.title}</h2>

                {/* Problem Statements - Map dynamic data */}
                {problemsData.items.map((item, index) => (
                    <ProblemCard key={index} svgIcon={item.icon} text={item.text} />
                ))}
            </div>
        </div>
    );
};

export default ProblemsSection;
