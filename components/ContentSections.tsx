import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertOctagon, CheckCircle, Search, Shield, Zap, Lock, 
  Eye, TrendingUp, Users, ShoppingBag, Laptop, CreditCard,
  XCircle, FileSearch, Check, X
} from 'lucide-react';
import { GlassCard, Badge } from './ui/Glass';
import { Feature, Step } from '../types';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        <GlassCard className="p-8 md:p-12 border-rose-100/50 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl group-hover:bg-rose-100/50 transition-colors duration-700" />
            <div className="relative z-10">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                    <XCircle className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-600">
                        <AlertOctagon className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>The cheapest price is often a scam or counterfeit.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <AlertOctagon className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>Fake stores look increasingly professional and real.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <AlertOctagon className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>Standard comparison tools don't filter for safety.</span>
                    </li>
                </ul>
            </div>
        </GlassCard>

        <GlassCard className="p-8 md:p-12 border-emerald-100/50 relative overflow-hidden group bg-gradient-to-b from-white/60 to-emerald-50/20">
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl group-hover:bg-emerald-100/50 transition-colors duration-700" />
             <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-600">
                        <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>AI matches exact product specs, not just names.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Deep scan of seller history, domain age, and reviews.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>We explain exactly <strong>why</strong> a deal is safe or risky.</span>
                    </li>
                </ul>
            </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    { id: 1, title: "Search", description: "Paste a product name, URL, or upload an image.", icon: <Search className="w-6 h-6 text-blue-600" /> },
    { id: 2, title: "Scan", description: "SafeBuy AI verifies stores across the web instantly.", icon: <Zap className="w-6 h-6 text-amber-500" /> },
    { id: 3, title: "Save", description: "See the cheapest SAFE price. Buy with confidence.", icon: <ShoppingBag className="w-6 h-6 text-emerald-500" /> },
  ];

  return (
    <section className="py-24 px-4 bg-white/30 backdrop-blur-sm border-y border-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge>How it works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Safe shopping in three steps.</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={fadeIn} className="relative group">
              <GlassCard hoverEffect className="p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 -z-10 select-none font-sans">
                  {step.id}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
    const features: Feature[] = [
        { title: "Exact Product Matching", description: "We match SKU, model numbers, and specs so you don't buy the wrong version.", icon: <Search className="w-5 h-5" /> },
        { title: "Seller Verification", description: "Deep analysis of domain registration, SSL certificates, and business footprint.", icon: <Shield className="w-5 h-5" /> },
        { title: "Trust Score (0-100)", description: "A simple, unified score for every seller calculated from 50+ data points.", icon: <TrendingUp className="w-5 h-5" /> },
        { title: "Anomaly Detection", description: "AI flags prices that are 'too good to be true' based on market history.", icon: <AlertOctagon className="w-5 h-5" /> },
        { title: "Transparent Logic", description: "Click any trust score to see exactly why a seller passed or failed.", icon: <FileSearch className="w-5 h-5" /> },
        { title: "Direct Buy Links", description: "We link you directly to the verified product page. No middlemen.", icon: <Lock className="w-5 h-5" /> },
    ];

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <Badge>Features</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Everything you need to buy safely.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <GlassCard key={i} hoverEffect className="p-6">
                        <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-4">
                            {f.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export const TrustSection: React.FC = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
             {/* Background blur for emphasis */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />
             
             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Cheapest doesn't matter if it's not safe.</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Scammers create thousands of fake storefronts every day. They use professional templates, fake reviews, and incredibly low prices to steal credit card info.
                        <br/><br/>
                        SafeBuy AI checks what human eyes miss:
                    </p>
                    <div className="space-y-4">
                        {[
                            "Domain age & registration privacy",
                            "SSL & HTTPS implementation depth",
                            "Payment gateway risk patterns",
                            "Historical pricing anomalies",
                            "Cross-referenced scam database records"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                    <Shield className="w-3 h-3" />
                                </div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <GlassCard className="p-8 relative" glassOpacity="heavy">
                         <div className="flex items-center justify-between mb-8">
                             <div>
                                 <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Trust Score</p>
                                 <h3 className="text-3xl font-bold text-slate-900">TechHaven.io</h3>
                             </div>
                             <div className="w-16 h-16 rounded-full border-4 border-rose-500 flex items-center justify-center text-rose-600 font-bold text-xl bg-rose-50">
                                 12
                             </div>
                         </div>
                         
                         <div className="space-y-4">
                             <div className="flex justify-between items-center text-sm p-3 bg-rose-50 rounded-lg text-rose-700 font-medium">
                                 <span className="flex items-center gap-2"><AlertOctagon className="w-4 h-4"/> Domain &lt; 30 Days Old</span>
                                 <span>-40 pts</span>
                             </div>
                             <div className="flex justify-between items-center text-sm p-3 bg-rose-50 rounded-lg text-rose-700 font-medium">
                                 <span className="flex items-center gap-2"><AlertOctagon className="w-4 h-4"/> Hidden WhoIs Data</span>
                                 <span>-20 pts</span>
                             </div>
                             <div className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-lg text-slate-500">
                                 <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> SSL Present</span>
                                 <span>+5 pts</span>
                             </div>
                         </div>
                         
                         <div className="mt-6 pt-6 border-t border-slate-100">
                             <p className="text-rose-600 font-semibold text-center">Recommendation: DO NOT BUY</p>
                         </div>
                    </GlassCard>
                </motion.div>
             </div>
        </section>
    );
}

export const WhoIsItFor: React.FC = () => {
    const audiences = [
        { label: "Online Shoppers", icon: <ShoppingBag className="w-5 h-5" /> },
        { label: "Students", icon: <Laptop className="w-5 h-5" /> },
        { label: "Electronics Buyers", icon: <Zap className="w-5 h-5" /> },
        { label: "Budget Conscious", icon: <CreditCard className="w-5 h-5" /> },
        { label: "Dropshippers", icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <section className="py-20 px-4 text-center">
            <h3 className="text-xl text-slate-500 mb-8">Built for smart buyers everywhere</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {audiences.map((a, i) => (
                    <GlassCard key={i} className="px-6 py-3 flex items-center gap-3 text-slate-700 font-medium cursor-default hover:bg-white/80 transition-colors">
                        {a.icon} {a.label}
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export const FeatureComparison: React.FC = () => {
  const rows = [
    { label: "Product name search", starter: true, pro: true },
    { label: "URL search", starter: true, pro: true },
    { label: "Image search", starter: false, pro: true },
    { label: "Exact product matching", starter: true, pro: true },
    { label: "Cheapest price detection", starter: true, pro: true },
    { label: "Seller trust score", starter: true, pro: "Advanced" },
    { label: "Scam detection", starter: true, pro: "Enhanced" },
    { label: "Alternatives (same product)", starter: true, pro: true },
    { label: "Price alerts", starter: false, pro: true },
    { label: "Search limit", starter: "50 / month", pro: "300 / month" },
    { label: "Sellers per search", starter: "10", pro: "30" },
    { label: "Saved products", starter: "10", pro: "Unlimited" },
    { label: "Price history", starter: "Basic", pro: "Full" },
    { label: "Export data", starter: false, pro: true },
    { label: "API access", starter: false, pro: true },
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="text-sm font-semibold text-slate-700">{value}</span>;
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <Badge>Compare</Badge>
        <h2 className="text-3xl font-bold text-slate-900 mt-4">Feature Breakdown</h2>
      </div>
      
      <GlassCard className="overflow-hidden p-0" glassOpacity="light">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200/60 bg-white/40">
                <th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-2/5">Feature</th>
                <th className="py-4 px-6 text-center text-slate-900 font-bold w-[30%]">Starter ($10.99)</th>
                <th className="py-4 px-6 text-center text-slate-900 font-bold w-[30%] bg-blue-50/30">Pro ($29.99)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/40">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/40 transition-colors">
                  <td className="py-3 px-6 text-slate-700 font-medium text-sm">{row.label}</td>
                  <td className="py-3 px-6 text-center">{renderCell(row.starter)}</td>
                  <td className="py-3 px-6 text-center bg-blue-50/10 font-medium">{renderCell(row.pro)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </section>
  );
};
