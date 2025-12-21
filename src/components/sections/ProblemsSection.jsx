import problemSectionSvg from "../../img/problemSection.svg"; // Import SVG file

// Component untuk setiap problem statement
const ProblemCard = ({ svgIcon, text }) => (
    <div
        className="flex items-start gap-4 pb-4 mb-4"
        style={{
            backgroundImage: 'repeating-linear-gradient(to right, #3B82F6 0px, #3B82F6 4px, transparent 4px, transparent 8px)',
            backgroundSize: '100% 1px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
        }}
    >
        <span
            className="flex-shrink-0 mt-1"
            dangerouslySetInnerHTML={{ __html: svgIcon }}
        />
        <p className="text-blue-500 leading-relaxed">{text}</p>
    </div>
);

// Main component
const TwoColumnComponent = () => {

    const svgIcon1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89C20.5738 17.3944 19.5788 18.7202 18.3119 19.7513C17.0449 20.7823 15.5447 21.4874 13.9424 21.8047C12.3401 22.1221 10.6844 22.0421 9.12012 21.5718C7.55585 21.1014 6.1306 20.255 4.969 19.1066C3.80739 17.9582 2.94479 16.5427 2.45661 14.9839C1.96843 13.4251 1.86954 11.7704 2.16857 10.1646C2.46761 8.55874 3.15547 7.05058 4.17202 5.77199C5.18857 4.49339 6.50286 3.48327 7.99998 2.82996" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    const svgIcon2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8L23 13" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 8L18 13" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    const svgIcon3 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1V23" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    return (
        <div className="flex max-w-7xl mx-auto bg-transparent shadow-none rounded-lg overflow-hidden gap-12 mt-20 mb-20
        ">
            {/* Kiri - Gambar */}
            <div className="flex-shrink-0 mt-12 mb-12">
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
                <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">It's hard to grow if there's no creative strategy</h2>

                {/* Problem Statements */}
                <ProblemCard svgIcon={svgIcon1} text="Your Brand Will Stuck" />
                <ProblemCard svgIcon={svgIcon2} text="Bad awareness & engagement" />
                <ProblemCard svgIcon={svgIcon3} text="Low purchasing or worse" />
            </div>
        </div>
    );
};

export default TwoColumnComponent;
