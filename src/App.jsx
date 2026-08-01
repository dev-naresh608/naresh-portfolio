import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const SupplyNestCaseStudy = lazy(() => import('./pages/projects/SupplyNestCaseStudy').then(m => ({ default: m.SupplyNestCaseStudy })));
const Resume = lazy(() => import('./pages/Resume').then(m => ({ default: m.Resume })));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center p-8 font-mono text-xs text-[#4C5C66]">
    <div className="p-4 border border-[#DCD3BE] bg-[#F1EBDD] flex items-center gap-3">
      <span className="w-2 h-2 bg-[#B8863E] animate-ping" />
      <span>LOADING SYSTEM MODULE...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/supplynest" element={<SupplyNestCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
