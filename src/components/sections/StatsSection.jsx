import React from 'react';

// Import SVG sebagai URL
import projectSvg from '../../img/project.svg';
import workinghoursSvg from '../../img/workinghours.svg';
import performanceSvg from '../../img/performance.svg';
import satisfiedSvg from '../../img/satisfied.svg';

const StatCard = ({ value, label, subLabel, iconSrc }) => (
    <div className="bg-white/10 py-12 rounded-3xl shadow-md border border-blue-500 flex flex-col items-center text-center">
        <img src={iconSrc} alt={label} style={{ width: '100px', height: '100px' }} className="mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
        <p className="font-bold text-gray-700 mb-2">{label}</p>
        <p className="text-xs text-gray-500 max-w-[150px]">{subLabel}</p>
    </div>
)

const StatsSection = () => {
    const stats = [
        { value: "+75", label: "Projects", subLabel: "Had already finished for 6 months", iconSrc: projectSvg },
        { value: "+100", label: "Working hours", subLabel: "We have dedication to our partners", iconSrc: workinghoursSvg },
        { value: "98%", label: "On Time Performance", subLabel: "Project completed before deadline", iconSrc: performanceSvg },
        { value: "96.5%", label: "Satisfied", subLabel: "Clients satisfied with our working quality", iconSrc: satisfiedSvg }
    ];

    return (
        <section className="py-0 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div>
                    <div className="flex items-center justify-center gap-3">
                        {/* Line kiri */}
                        <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                        {/* Icon SVG */}
                        <div className="">
                            <span
                                className="w-6 h-6"
                                dangerouslySetInnerHTML={{
                                    __html: `
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_323_121)">
<path d="M90.2625 45.675L81 50.2875L69 27.3375L78.375 22.65C79.0717 22.2949 79.8806 22.2296 80.6252 22.4685C81.3699 22.7073 81.9898 23.2309 82.35 23.925L91.575 41.5875C91.7621 41.9411 91.8765 42.3285 91.9117 42.7269C91.9468 43.1254 91.9019 43.5269 91.7796 43.9077C91.6574 44.2886 91.4601 44.6411 91.1996 44.9446C90.939 45.2481 90.6204 45.4965 90.2625 45.675Z" stroke="url(#paint0_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 49.9125L5.73747 45.2625C5.38083 45.0877 5.06298 44.843 4.80281 44.5429C4.54264 44.2428 4.34548 43.8934 4.22303 43.5156C4.10059 43.1378 4.05537 42.7392 4.09006 42.3435C4.12475 41.9479 4.23865 41.5632 4.42497 41.2125L13.65 23.55C14.0108 22.8563 14.6283 22.331 15.3707 22.0858C16.1132 21.8407 16.922 21.8951 17.625 22.2375L27 26.925L15 49.9125Z" stroke="url(#paint1_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81 50.2875L75 57.3375L61.2 71.1375C60.8239 71.4892 60.3682 71.7445 59.8718 71.8817C59.3755 72.0188 58.8533 72.0337 58.35 71.925L36.6 66.4875C36.2027 66.3767 35.8325 66.1852 35.5125 65.925L15 49.9125" stroke="url(#paint2_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 57.3375L58.5 45.3375L53.7 48.9375C51.6204 50.4897 49.095 51.3282 46.5 51.3282C43.9051 51.3282 41.3796 50.4897 39.3 48.9375L37.275 47.4C36.9326 47.1397 36.6494 46.8096 36.4441 46.4316C36.2388 46.0536 36.1161 45.6363 36.0842 45.2073C36.0523 44.7783 36.1119 44.3475 36.259 43.9433C36.4061 43.539 36.6374 43.1707 36.9375 42.8625L51.6375 28.2C51.9137 27.9253 52.2413 27.7077 52.6016 27.5597C52.962 27.4117 53.348 27.3362 53.7375 27.3375H69" stroke="url(#paint3_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.225 26.925L46.4625 21.3C47.146 21.1039 47.877 21.1571 48.525 21.45L61.5 27.3375" stroke="url(#paint4_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42 79.8375L30.7125 76.9875C30.2525 76.8836 29.8266 76.6642 29.475 76.35L21 69" stroke="url(#paint5_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_323_121" x1="94.5308" y1="17.1571" x2="68.7426" y2="65.5945" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint1_linear_323_121" x1="29.6073" y1="16.7616" x2="3.79292" y2="65.2138" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint2_linear_323_121" x1="88.5075" y1="45.8292" x2="81.4858" y2="93.9055" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint3_linear_323_121" x1="79.4276" y1="21.7906" x2="59.2697" y2="81.7107" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint4_linear_323_121" x1="65.3988" y1="20.0459" x2="64.3331" y2="33.6445" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint5_linear_323_121" x1="44.3887" y1="66.9962" x2="39.2231" y2="89.9285" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<clipPath id="clip0_323_121">
<rect width="96" height="96" fill="white"/>
</clipPath>
</defs>
</svg>

        `,
                                }}
                            />
                        </div>

                        {/* Line kanan */}
                        <span className="flex-1 h-px bg-gradient-to-l from-[#3B82F6] to-[#F089D5]" />
                    </div>

                </div>
                <h2 className="text-3xl mt-8 md:text-5xl font-bold text-blue-600 mb-4">You’re in the right decision</h2>
                <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-16">
                    Here are the reason why is your decision make. <br />
                    We have experienced, clients satisfied and everything.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
