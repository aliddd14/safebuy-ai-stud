import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Search, CheckCircle2 } from 'lucide-react';
import { GlassCard, Badge } from './ui/Glass';
import { WaitlistForm } from './WaitlistForm';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="premium">Coming Soon</Badge>
            <h1 className="mt-6 text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Find the cheapest price <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                without getting scammed.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              SafeBuy AI searches the internet for the exact same product, verifies seller trust, detects scam risks, and shows you the safest deals first.
            </p>
            
            <div className="mt-10">
              <WaitlistForm />
            </div>
            
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Free Forever Plan</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Early Access</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-xl relative perspective-1000"
        >
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Main Interface Card */}
          <GlassCard className="p-4 sm:p-6 relative z-10" glassOpacity="heavy">
            {/* Fake Search Bar */}
            <div className="flex items-center gap-3 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
              <Search className="w-5 h-5 text-slate-400" />
              <div className="h-2 w-32 bg-slate-200 rounded-full"></div>
            </div>

            {/* Results Stack */}
            <div className="space-y-4">
              {/* Risky Result */}
              <motion.div 
                initial={{ x: 0 }} 
                animate={{ x: 0 }} 
                className="p-4 rounded-xl border border-rose-100 bg-white/50 flex items-center gap-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 px-2 py-1 bg-rose-100 text-rose-600 text-[10px] font-bold uppercase rounded-bl-lg">
                  High Risk
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0" />
                <div className="flex-grow">
                  <div className="h-3 w-3/4 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-slate-100 rounded" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-rose-600">$249.00</div>
                  <div className="flex items-center gap-1 text-xs text-rose-500 justify-end mt-1">
                    <AlertTriangle className="w-3 h-3" /> Scam Likely
                  </div>
                </div>
                {/* Blur overlay for risky item */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all" />
              </motion.div>

              {/* Safe Result - Highlighted */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30 shadow-lg flex items-center gap-4 relative ring-1 ring-emerald-100"
              >
                 <div className="absolute top-0 right-0 px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-bl-lg flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Safe
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    {/* Placeholder product icon */}
                    <div className="w-6 h-6 rounded-full border-2 border-white/30" />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold text-slate-800">Sony WH-1000XM5</div>
                  <div className="text-xs text-slate-500">Verified Seller • 99/100 Trust</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">$298.00</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">Best Safe Price</div>
                </div>
              </motion.div>
              
               {/* Another Result */}
               <div className="p-4 rounded-xl border border-slate-100 bg-white/30 flex items-center gap-4 opacity-60">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0" />
                <div className="flex-grow">
                  <div className="h-3 w-2/3 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-1/3 bg-slate-100 rounded" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-400">$349.00</div>
                </div>
              </div>

            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
