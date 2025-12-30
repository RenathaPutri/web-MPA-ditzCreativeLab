
import React from 'react';
import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import { PenTool, FileText, MessageSquare } from 'lucide-react';

const CopywritingPage = () => {
    const focusItems = [
        {
            title: "Website Copywriting",
            icon: MonitorPlay, // Using generic icon if specific import failed, but ideally imported above
            points: [
                "Compelling headlines and subheadings.",
                "SEO-optimized content.",
                "Clear and persuasive calls to action.",
                "About Us and service descriptions."
            ]
        },
        {
            title: "Social Media Captions",
            icon: MessageSquare,
            points: [
                "Engaging captions for Instagram & TikTok.",
                "Hashtag strategy integration.",
                "Brand voice consistency.",
                "Call-to-action optimization."
            ]
        },
        {
            title: "Blog & Article Writing",
            icon: FileText,
            points: [
                "In-depth industry articles.",
                "Keyword research and integration.",
                "Readable and shareable structure.",
                "Thought leadership content."
            ]
        }
    ];

    const pricingCategories = {
        corporate: [
            {
                title: "Corporate Standard",
                description: "Essential copy for business",
                price: "Rp. 399K/Project",
                features: [
                    "5 Pages Website Copy",
                    "Basic SEO Optimization",
                    "2 Revisions",
                    "Brand Tone Guide"
                ],
                isPremium: false
            },
            {
                title: "Corporate Pro",
                description: "Full suite copywriting",
                price: "Rp. 799K/Project",
                features: [
                    "10 Pages Website Copy",
                    "Advanced SEO Strategy",
                    "Unlimited Revisions",
                    "Brand Voice Workshop",
                    "Blog Bundle (3 Posts)"
                ],
                isPremium: true
            }
        ],
        umkm: [
            {
                title: "UMKM Starter",
                description: "Quick start for local biz",
                price: "Rp. 199K/Project",
                features: [
                    "3 Pages Website Copy",
                    "Basic Headlines",
                    "1 Revision"
                ],
                isPremium: false
            },
            {
                title: "UMKM Growth",
                description: "Better words for sales",
                price: "Rp. 349K/Project",
                features: [
                    "5 Pages Website Copy",
                    "Sales Email Template",
                    "2 Revisions",
                    "Social Media Bios"
                ],
                isPremium: true
            }
        ],
        student: [
            {
                title: "Student Resume",
                description: "Stand out in applications",
                price: "Rp. 99K/Doc",
                features: [
                    "Resume / CV Rewriting",
                    "Cover Letter",
                    "LinkedIn Bio Optimization"
                ],
                isPremium: false
            },
            {
                title: "Student Portfolio",
                description: "Showcase your work",
                price: "Rp. 199K/Doc",
                features: [
                    "Portfolio Case Study Writing",
                    "Personal Bio",
                    "Project Descriptions",
                    "LinkedIn Articles"
                ],
                isPremium: true
            }
        ]
    };

    return (
        <ServicePageTemplate
            pageTitle="Copywriting Services"
            heroSubtitle={<>Words matter. We help you find the right ones <br /> to connect with your audience and drive action.</>}
            focusTitle={<>We focus on crafting compelling <br /> narratives for your brand</>}
            focusItems={focusItems}
            servicesTitle="Our Copywriting Packages"
            servicesSubtitle={<>Choose the package that fits your needs, from website copy to content marketing.</>}
            pricingCategories={pricingCategories}
        />
    );
};

// Fix for the missing Icon import in focusItems[0]
import { MonitorPlay } from 'lucide-react';

export default CopywritingPage;
