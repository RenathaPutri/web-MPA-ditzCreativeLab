import { testimonials } from '../../data/testimonials';

const TestimonialCard = ({ text, author, role, image }) => (
    <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#3B82F6] to-[#F089D5] min-w-[300px] md:min-w-[400px]">

        <div className="bg-white p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-between">
            <span
                className="absolute top-6 left-6 w-10 h-10"
                dangerouslySetInnerHTML={{
                    __html: `
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.52799 14.5279H-1.07288e-05L6.14399 -9.15527e-05H10.304L6.52799 14.5279ZM16.896 14.5279H10.368L16.512 -9.15527e-05H20.672L16.896 14.5279Z" fill="#3B82F6"/>
</svg>

                    `,
                }}
            />

            <p className="text-xs text-gray-600 mb- relative z-10 leading-relaxed pt-6">
                "{text}"
            </p>

            <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-blue-100">
                    {image ? (
                        <img
                            src={image}
                            alt={author}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-blue-600 font-bold">
                            {author[0]}
                        </span>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{author}</h4>
                    <p className="text-sm text-blue-500">{role}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section
            id="testimonials"
            className="py-0 px-4 bg-transparent overflow-hidden"
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-3">
                    {/* Line kiri */}
                    <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                    {/* Icon SVG */}
                    <div className="">
                        <span
                            className="w-6 h-6"
                            dangerouslySetInnerHTML={{
                                __html: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_323_121)">
<path d="M90.2625 45.675L81 50.2875L69 27.3375L78.375 22.65C79.0717 22.2949 79.8806 22.2296 80.6252 22.4685C81.3699 22.7073 81.9898 23.2309 82.35 23.925L91.575 41.5875C91.7621 41.9411 91.8765 42.3285 91.9117 42.7269C91.9468 43.1254 91.9019 43.5269 91.7796 43.9077C91.6574 44.2886 91.4601 44.6411 91.1996 44.9446C90.939 45.2481 90.6204 45.4965 90.2625 45.675Z" stroke="url(#paint0_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 49.9125L5.73747 45.2625C5.38083 45.0877 5.06298 44.843 4.80281 44.5429C4.54264 44.2428 4.34548 43.8934 4.22303 43.5156C4.10059 43.1378 4.05537 42.7392 4.09006 42.3435C4.12475 41.9479 4.23865 41.5632 4.42497 41.2125L13.65 23.55C14.0108 22.8563 14.6283 22.331 15.3707 22.0858C16.1132 21.8407 16.922 21.8951 17.625 22.2375L27 26.925L15 49.9125Z" stroke="url(#paint1_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81 50.2875L75 57.3375L61.2 71.1375C60.8239 71.4892 60.3682 71.7445 59.8718 71.8817C59.3755 72.0188 58.8533 72.0337 58.35 71.925L36.6 66.4875C36.2027 66.3767 35.8325 66.1852 35.5125 65.925L15 49.9125" stroke="url(#paint2_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 57.3375L58.5 45.3375L53.7 48.9375C51.6204 50.4897 49.095 51.3282 46.5 51.3282C43.9051 51.3282 41.3796 50.4897 39.3 48.9375L37.275 47.4C36.9326 47.1397 36.6494 46.8096 36.4441 46.4316C36.2388 46.0536 36.1161 45.6363 36.0842 45.2073C36.0523 44.7783 36.1119 44.3475 36.259 43.9433C36.4061 43.539 36.6374 43.1707 36.9375 42.8625L51.6375 28.2C51.9137 27.9253 52.2413 27.7077 52.6016 27.5597C52.962 27.4117 53.348 27.3362 53.7375 27.3375H69" stroke="url(#paint3_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.225 26.925L46.4625 21.3C47.146 21.1039 47.877 21.1571 48.525 21.45L61.5 27.3375" stroke="url(#paint4_linear_323_121)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                <h2 className="text-4xl mt-8 md:text-5xl font-bold text-blue-600 mb-4">
                    What they say about us
                </h2>
                <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-16">
                    Before you go deeper, let’s read about our previous clients. <br />
                    They have proving that Ditz Creative Lab is the best choice.
                </p>
            </div>

            {/* Horizontal Scroll / Grid */}
            <div className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x hide-scrollbar max-w-7xl mx-auto">
                {testimonials.slice(0, 3).map((t, i) => (
                    <TestimonialCard key={i} {...t} />
                ))}
                {testimonials.slice(3).map((t, i) => (
                    <TestimonialCard key={i + 3} {...t} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
