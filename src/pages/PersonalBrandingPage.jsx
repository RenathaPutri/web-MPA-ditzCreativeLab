
import React from 'react';
import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import { User, Award, TrendingUp } from 'lucide-react';

const PersonalBrandingPage = () => {
    const focusItems = [
        {
            title: "Brand Strategy",
            icon: User,
            points: [
                "Identifying unique value proposition.",
                "Target audience definition.",
                "Brand persona development.",
                "Strategic positioning roadmap."
            ]
        },
        {
            title: "Digital Presence",
            icon: TrendingUp,
            points: [
                "Social media profile optimization.",
                "Content strategy for personal growth.",
                "Website/Portfolio consultancy.",
                "Networking strategy."
            ]
        },
        {
            title: "Reputation Management",
            icon: Award,
            points: [
                "Guidelines for public communication.",
                "Crisis management basics.",
                "Consistency in messaging.",
                "Building authority in your niche."
            ]
        }
    ];

    const pricingCategories = {
        corporate: [
            {
                title: "Executive Branding",
                description: "For C-Level executives",
                price: "Rp. 1.999K",
                features: [
                    "Complete Content Strategy",
                    "LinkedIn Management",
                    "Thought Leadership Articles",
                    "Ghostwriting Services",
                    "Monthly Analytics"
                ],
                isPremium: false
            },
            {
                title: "CEO Personal Brand",
                description: "Full service management",
                price: "Rp. 3.499K/Month",
                features: [
                    "Daily Content Creation",
                    "Video Scripting",
                    "PR & Media Kit",
                    "Speaker Profile Optimization",
                    "Dedicated Brand Manager"
                ],
                isPremium: true
            }
        ],
        umkm: [
            {
                title: "Founder Starter",
                description: "For business owners",
                price: "Rp. 499K",
                features: [
                    "LinkedIn Profile Makeover",
                    "Content Pillars Strategy",
                    "1 Month Content Plan",
                    "Bio Optimization"
                ],
                isPremium: false
            },
            {
                title: "Founder Growth",
                description: "Grow your influence",
                price: "Rp. 899K",
                features: [
                    "4 LinkedIn Posts/Month",
                    "Personal Storytelling Session",
                    "Engagement Strategy",
                    "Network Growth Tips"
                ],
                isPremium: true
            }
        ],
        student: [
            {
                title: "Career Starter",
                description: "Land your first job",
                price: "Rp. 149K",
                features: [
                    "LinkedIn Review",
                    "Resume/CV Feedback",
                    "Headline Optimization"
                ],
                isPremium: false
            },
            {
                title: "Creative Portfolio",
                description: "For creative students",
                price: "Rp. 299K",
                features: [
                    "Behance/Dribbble Setup",
                    "Portfolio Review",
                    "Personal Website Audit",
                    "Project Case Study Tips"
                ],
                isPremium: true
            }
        ]
    };

    return (
        <ServicePageTemplate
            pageTitle="Personal Branding Services"
            heroSubtitle={<>It's not just about who you know, but who knows you. <br /> Build a powerful personal brand that opens doors.</>}
            focusTitle={<>We help you define and express <br /> your authentic self</>}
            focusItems={focusItems}
            servicesTitle="Branding Packages"
            servicesSubtitle={<>Invest in yourself. Choose a package to start building your legacy.</>}
            pricingCategories={pricingCategories}
        />
    );
};

export default PersonalBrandingPage;
