import React from "react";
import activitiesSvg from "../../img/activities.svg";

// Component untuk setiap activity statement
const ActivityCard = ({ svgIcon, text }) => (
    <div className="flex items-start gap-4 border-b border-dashed border-blue-500 pb-4 mb-4">
        <span
            className="flex-shrink-0 mt-1"
            dangerouslySetInnerHTML={{ __html: svgIcon }}
        />
        <p className="text-blue-500 leading-relaxed">{text}</p>
    </div>
);

// Main component
const ActivitiesSection = () => {
    const svgIcon1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_298_130)">
<path d="M18.75 21C19.9926 21 21 19.9926 21 18.75C21 17.5074 19.9926 16.5 18.75 16.5C17.5074 16.5 16.5 17.5074 16.5 18.75C16.5 19.9926 17.5074 21 18.75 21Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75 5.25H15.75C16.5456 5.25 17.3087 5.56607 17.8713 6.12868C18.4339 6.69129 18.75 7.45435 18.75 8.25C18.75 9.04565 18.4339 9.80871 17.8713 10.3713C17.3087 10.9339 16.5456 11.25 15.75 11.25H6.75C5.75544 11.25 4.80161 11.6451 4.09835 12.3483C3.39509 13.0516 3 14.0054 3 15C3 15.9946 3.39509 16.9484 4.09835 17.6517C4.80161 18.3549 5.75544 18.75 6.75 18.75H16.5" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_298_130">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

    const svgIcon2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_298_135)">
<path d="M14.6438 20.6063C13.7866 20.8667 12.8958 20.9994 12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9994 12.8958 20.8667 13.7866 20.6063 14.6438L14.6438 20.6063Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.625 10C8.69404 10 8.75 10.056 8.75 10.125C8.75 10.194 8.69404 10.25 8.625 10.25C8.55596 10.25 8.5 10.194 8.5 10.125C8.5 10.056 8.55596 10 8.625 10Z" fill="#3B82F6" stroke="#3B82F6" stroke-width="2"/>
<path d="M15.375 10C15.444 10 15.5 10.056 15.5 10.125C15.5 10.194 15.444 10.25 15.375 10.25C15.306 10.25 15.25 10.194 15.25 10.125C15.25 10.056 15.306 10 15.375 10Z" fill="#3B82F6" stroke="#3B82F6" stroke-width="2"/>
<path d="M15.9 14.25C15.5035 14.9331 14.9346 15.5 14.2501 15.8941C13.5657 16.2882 12.7898 16.4956 12 16.4956C11.2102 16.4956 10.4342 16.2882 9.74981 15.8941C9.06538 15.5 8.49645 14.9331 8.09998 14.25" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_298_135">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

    const svgIcon3 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_298_142)">
<path d="M12 2.25V4.5" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 6.375V8.625" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19.5V21.75" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5V16.5" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 6.375V12.375" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 11.625V17.625" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10.875V13.125" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 15.375V17.625" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10.875V13.125" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_298_142">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

    return (
        <div className="flex max-w-7xl mx-auto bg-transparent shadow-none rounded-lg overflow-hidden gap-8 mt-20 mb-20">
            {/* Kiri - Gambar */}
            <div className="flex-shrink-0 mt-12 mb-12">
                <img
                    src={activitiesSvg}
                    alt="Activities Illustration"
                    width={454}
                    height={290}
                    className="object-cover"
                />
            </div>

            {/* Kanan - Title + Activity Statements */}
            <div className="flex flex-col p-6 flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4 whitespace-normal">
                    Let Ditz Crew do their
                    <br />
                    incredible job
                </h2>

                <p className="text-blue-500 text-xl mb-8">
                    While you are waiting, you also can do:
                </p>

                {/* Activity Statements */}
                <ActivityCard svgIcon={svgIcon1} text="Travelling" />
                <ActivityCard svgIcon={svgIcon2} text="Spend your time with family" />
                <ActivityCard svgIcon={svgIcon3} text="Do your hobbies" />
            </div>
        </div>
    );
};

export default ActivitiesSection;
