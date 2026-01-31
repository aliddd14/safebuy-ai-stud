import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import { submitToWaitlist } from '../services/api';
import { Button } from './ui/Glass';

interface WaitlistFormProps {
  variant?: 'inline' | 'card';
  source?: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = 'inline', source = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    const response = await submitToWaitlist({ email, name, source });

    if (response.success) {
      setStatus('success');
      setEmail('');
      setName('');
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 p-4 bg-emerald-50/50 border border-emerald-100 text-emerald-800 rounded-xl backdrop-blur-sm"
      >
        <div className="bg-emerald-100 p-2 rounded-full">
          <Check className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-semibold text-sm">You're on the list!</p>
          <p className="text-xs text-emerald-700/80">We'll email you when SafeBuy AI launches.</p>
        </div>
      </motion.div>
    );
  }

  const inputClasses = "w-full bg-white/50 backdrop-blur-sm border border-slate-200/60 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative group">
      <div className={`flex flex-col gap-3 ${variant === 'card' ? 'p-6 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl' : ''}`}>
        
        {variant === 'card' && (
          <div className="mb-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Your Name (Optional)</label>
            <input 
              type="text" 
              placeholder="Alex Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${inputClasses} mt-1`}
            />
          </div>
        )}

        <div className="relative flex flex-col sm:flex-row gap-2">
           <input 
            type="email" 
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputClasses} flex-grow`}
          />
          <Button 
            type="submit" 
            disabled={status === 'loading'}
            className={variant === 'card' ? 'w-full sm:w-auto' : 'w-full sm:w-auto whitespace-nowrap'}
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
        
        <p className="text-xs text-slate-500 text-center sm:text-left ml-1 mt-1 flex items-center justify-center sm:justify-start gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
          No spam. No selling data. Ever.
        </p>
      </div>
    </form>
  );
};
