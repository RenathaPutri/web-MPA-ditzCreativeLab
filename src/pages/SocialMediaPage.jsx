
import React from 'react';
import ServicePageTemplate from '../components/templates/ServicePageTemplate';
import { BarChart2, Compass, MonitorPlay } from 'lucide-react';

const SocialMediaPage = () => {
    const focusItems = [
        {
            title: "Social Media Management",
            icon: MonitorPlay,
            points: [
                "Developing effective content strategies and post schedules.",
                "Caption and hashtag research.",
                "Programmed social content management with compelling, high-quality visuals and copywriting.",
                "Schedule and content publications."
            ]
        },
        {
            title: "Content Strategy & Planning",
            icon: Compass,
            points: [
                "Develop pillars strategy.",
                "Monthly content calendar.",
                "Tone of voice and visual branding style.",
                "Post-storming (post ideas) with Ditz creative team."
            ]
        },
        {
            title: "Insight & Analytics",
            icon: BarChart2,
            points: [
                "Visualize significant matrix content engagement growth.",
                "Detailed reviews with performance.",
                "Performance report & Action recommendations."
            ]
        }
    ];

    const pricingCategories = {
        corporate: [
            {
                title: "Corporate Essential Package",
                description: "perfect for growing businesses who need consistent brand presence",
                price: "Rp. 499K/Month",
                features: [
                    "12 Feeds/Contents (Carousel or static posts)",
                    "Interactive Instagram stories",
                    "Professional copywriting and hashtag research",
                    "Basic content calendar",
                    "Monthly insight report"
                ],
                isPremium: false
            },
            {
                title: "Corporate Premium Package",
                description: "Ideal for businesses who need high engagement and unique visual branding",
                price: "Rp. 999K/Month",
                features: [
                    "24 Feeds/Contents (Carousel, animated, or static posts)",
                    "Daily interactive Instagram stories",
                    "Professional copywriting and visual branding research",
                    "Monthly content calendar",
                    "Monthly insight report with strategic recommendations"
                ],
                isPremium: true
            }
        ],
        umkm: [
            {
                title: "UMKM Starter",
                description: "Good start for small businesses",
                price: "Rp. 299K/Month",
                features: [
                    "8 Feeds/Contents",
                    "Hashtag research",
                    "Simple copywriting",
                    "Monthly report"
                ],
                isPremium: false
            },
            {
                title: "UMKM Pro",
                description: "Boost your local business",
                price: "Rp. 599K/Month",
                features: [
                    "15 Feeds/Contents",
                    "Interactive stories",
                    "Copywriting & Hashtags",
                    "Content calendar",
                    "Monthly report"
                ],
                isPremium: true
            }
        ],
        student: [
            {
                title: "Student Basic",
                description: "For personal branding",
                price: "Rp. 150K/Month",
                features: [
                    "4 Feeds/Month",
                    "Profile optimization",
                    "Caption assistance"
                ],
                isPremium: false
            },
            {
                title: "Student Active",
                description: "Serious about content",
                price: "Rp. 300K/Month",
                features: [
                    "8 Feeds/Month",
                    "Profile optimization",
                    "Content planning",
                    "Engagement tips"
                ],
                isPremium: true
            }
        ]
    };

    return (
        <ServicePageTemplate
            pageTitle="Social Media Growth Services"
            heroSubtitle={<>Social media is important to grow your brand, <br /> personal branding, and business.</>}
            focusTitle={<>We have focus on several <br /> main key of social media</>}
            focusItems={focusItems}
            servicesTitle="Our services on Social Media"
            servicesSubtitle={<>Here are several packages to help you grow your business or <br /> opportunities through social media. Let's deep dive!</>}
            pricingCategories={pricingCategories}
        />
    );
};

export default SocialMediaPage;
