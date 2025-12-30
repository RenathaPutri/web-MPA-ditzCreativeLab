
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const SocialMediaPage = lazy(() => import('./pages/SocialMediaPage'));
const GraphicDesignPage = lazy(() => import('./pages/GraphicDesignPage'));
const CopywritingPage = lazy(() => import('./pages/CopywritingPage'));
const PersonalBrandingPage = lazy(() => import('./pages/PersonalBrandingPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));

// Simple loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

function App() {
    return (
        // <HelmetProvider>
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/social-media" element={<SocialMediaPage />} />
                        <Route path="/graphic-design" element={<GraphicDesignPage />} />
                        <Route path="/copywriting" element={<CopywritingPage />} />
                        <Route path="/personal-branding" element={<PersonalBrandingPage />} />
                        <Route path="/services/:serviceId" element={<ServicePage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        // </HelmetProvider>
    );
}

export default App;
