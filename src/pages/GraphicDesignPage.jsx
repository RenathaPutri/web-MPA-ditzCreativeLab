
import React from 'react';
import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import { Palette, PenTool, Layout } from 'lucide-react';

const GraphicDesignPage = () => {
    const focusItems = [
        {
            title: "Brand Identity",
            icon: Palette,
            points: [
                "Logo design and usage guidelines.",
                "Color palette selection.",
                "Typography systems.",
                "Brand assets and moodboards."
            ]
        },
        {
            title: "Marketing Materials",
            icon: Layout,
            points: [
                "Business cards and stationery.",
                "Flyers, brochures, and posters.",
                "Social media templates.",
                "Banner ads and email graphics."
            ]
        },
        {
            title: "Custom Illustrations",
            icon: PenTool,
            points: [
                "Unique character design.",
                "Infographics and iconography.",
                "Editorial illustrations.",
                "Custom visual assets."
            ]
        }
    ];

    const pricingCategories = {
        corporate: [
            {
                title: "Corporate Identity",
                description: "Complete branding for new companies",
                price: "Rp. 1.499K",
                features: [
                    "Logo Design (3 Concepts)",
                    "Brand Guidelines PDF",
                    "Stationery Suite",
                    "Social Media Kit",
                    "Unlimited Revisions"
                ],
                isPremium: false
            },
            {
                title: "Design Retainer",
                description: "Ongoing design support",
                price: "Rp. 2.999K/Month",
                features: [
                    "Unlimited Design Requests",
                    "Typical 48hr Turnaround",
                    "Dedicated Designer",
                    "Source Files Included",
                    "Prioritized Support"
                ],
                isPremium: true
            }
        ],
        umkm: [
            {
                title: "Logo Starter",
                description: "Basic logo for small biz",
                price: "Rp. 299K",
                features: [
                    "1 Logo Concept",
                    "High Res Exports",
                    "1 Revision Round",
                    "Transparent Background"
                ],
                isPremium: false
            },
            {
                title: "Branding Mini",
                description: "Essential look & feel",
                price: "Rp. 599K",
                features: [
                    "Logo Design (2 Concepts)",
                    "Color Palette",
                    "Business Card Design",
                    "3 Revisions"
                ],
                isPremium: true
            }
        ],
        student: [
            {
                title: "Poster/Flyer",
                description: "For events or projects",
                price: "Rp. 99K",
                features: [
                    "A4/A3 Layout",
                    "Print Ready PDF",
                    "1 Revision"
                ],
                isPremium: false
            },
            {
                title: "Portfolio Layout",
                description: "Design your portfolio PDF",
                price: "Rp. 249K",
                features: [
                    "Up to 10 Pages",
                    "Custom Layout",
                    "Cover Design",
                    "Digital Optimized PDF"
                ],
                isPremium: true
            }
        ]
    };

    return (
        <ServicePageTemplate
            pageTitle="Graphic Design Services"
            heroSubtitle={<>Visuals speak louder than words. We create designs <br /> that captivate your audience and elevate your brand.</>}
            focusTitle={<>Our design expertise covers <br /> every aspect of your brand</>}
            focusItems={focusItems}
            servicesTitle="Design Packages"
            servicesSubtitle={<>From simple logos to comprehensive brand identities, we have you covered.</>}
            pricingCategories={pricingCategories}
        />
    );
};

export default GraphicDesignPage;
