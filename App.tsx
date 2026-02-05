import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution, HowItWorks, Features, TrustSection, WhoIsItFor, FeatureComparison, FAQ } from './components/ContentSections';
import { WaitlistForm } from './components/WaitlistForm';
import { WaitlistModal } from './components/WaitlistModal';
import { GlassCard, Badge } from './components/ui/Glass';
import { ShieldCheck, Lock, Search, AlertOctagon, LineChart, Image, Zap, Globe, FileText } from 'lucide-react';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-900 mesh-gradient relative font-sans selection:bg-blue-100 selection:text-blue-900">
      
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      {/* Navigation (Simple) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="bg-white/70 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-slate-900" />
            <span className="font-bold tracking-tight">SafeBuy AI</span>
          </div>
          <div className="hidden sm:block">
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg active:scale-95 transform"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <TrustSection />
        <WhoIsItFor />
        <FeatureComparison />

        {/* Pricing Preview */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Simple Pricing.</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Choose the level of protection that fits your shopping habits.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Starter Plan */}
            <GlassCard className="p-8 border-t-4 border-t-blue-400 transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold">Starter</h3>
                   <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded-full tracking-wide">Smart Shopper</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 h-10">For shoppers who want safety and savings without the hassle.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$14.99</span>
                  <span className="text-slate-500">/ month</span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {/* Core Search */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Features</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <Search className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span><strong>50 searches</strong> / month</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <Search className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span>Search by Name & URL</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span>Seller Trust Score (0-100)</span>
                    </li>
                  </ul>
                </div>

                {/* Safety */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Safety Intelligence</p>
                  <ul className="space-y-3">
                     <li className="flex gap-3 text-slate-700 text-sm">
                      <AlertOctagon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span>Scam Risk Labeling & Domain Age</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span>AI "Why this is safe" Explanations</span>
                    </li>
                     <li className="flex gap-3 text-slate-700 text-sm">
                      <LineChart className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> 
                      <span>30-Day Search History</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full py-3 mt-8 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors border border-slate-200"
              >
                Join Starter Waitlist
              </button>
            </GlassCard>

            {/* Pro Plan */}
            <GlassCard className="p-8 border-t-4 border-t-slate-900 relative transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col bg-gradient-to-b from-white/80 to-blue-50/20">
              <div className="absolute top-0 right-0 -mt-3 mr-4">
                 <Badge variant="premium">Coming Soon</Badge>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold text-slate-900">Pro</h3>
                   <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase rounded-full tracking-wide">Power User</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 h-10">For deal hunters and safety-first buyers who need deep analysis.</p>
                 <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$29.99</span>
                  <span className="text-slate-500">/ month</span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {/* Advanced Features */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Everything in Starter, plus:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-800 text-sm font-medium">
                      <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> 
                      <span><strong>300 searches</strong> / month</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <Image className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /> 
                      <span>Image Search & Fingerprinting</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <Globe className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" /> 
                      <span>International Store Support</span>
                    </li>
                  </ul>
                </div>

                {/* Deep Intelligence */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Deep Intelligence</p>
                  <ul className="space-y-3">
                     <li className="flex gap-3 text-slate-700 text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> 
                      <span>Fake Review & Behavior Analysis</span>
                    </li>
                     <li className="flex gap-3 text-slate-700 text-sm">
                      <AlertOctagon className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" /> 
                      <span>Price Drop & Safety Score Alerts</span>
                    </li>
                    <li className="flex gap-3 text-slate-700 text-sm">
                      <LineChart className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /> 
                      <span>Full Price History & CSV Export</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full py-3 mt-8 bg-slate-900 text-white rounded-xl font-medium shadow-lg hover:bg-slate-800 transition-colors"
              >
                Join Pro Waitlist
              </button>
            </GlassCard>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-16 px-4 text-center max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 text-slate-400 mb-4">
              <Lock className="w-4 h-4" />
              <span className="uppercase text-xs font-bold tracking-widest">Privacy First</span>
           </div>
           <h3 className="text-xl font-semibold text-slate-800 mb-4">We do not sell your data.</h3>
           <p className="text-slate-600 leading-relaxed">
             SafeBuy AI makes money from Pro subscriptions, not by selling your shopping habits to advertisers. 
             We don't accept payment from sellers to boost their trust scores. Safety is our only metric.
           </p>
        </section>
        
        <FAQ />

        {/* Final CTA */}
        <section id="waitlist" className="py-32 px-4">
           <div className="max-w-4xl mx-auto">
             <GlassCard className="p-10 md:p-16 text-center relative overflow-hidden" glassOpacity="heavy">
                {/* Decorative blob behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-[80px] -z-10" />
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ready to shop smarter and safer?</h2>
                <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                  Join the waitlist today. Be the first to know when we launch and secure your early-bird pricing.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm variant="card" source="footer_cta" />
                </div>
             </GlassCard>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white/50 backdrop-blur-sm text-center">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} SafeBuy AI. All rights reserved.</p>
      </footer>

    </div>
  );
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default App;