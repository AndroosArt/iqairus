import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QuizModal from './components/QuizModal';
import ProfitCalculator from './components/ProfitCalculator';
import ShimmerButton from './components/Button';
import GlassCard from './components/GlassCard';
import { Brain, Rocket, Shield, ChevronRight } from 'lucide-react';

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30">
      <Navbar onOpenQuiz={() => { console.log("Opening Quiz"); setIsQuizOpen(true); }} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gold animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Accepting New Clients for Q1 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Autonomous</span><br />
              Business Systems.
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Stop trading time for money. IQairus implements high-end AI infrastructures that scale your operations while you sleep.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <ShimmerButton onClick={() => setIsQuizOpen(true)}>
                Get Your AI Roadmap
              </ShimmerButton>
              <button className="px-8 py-3 rounded-full font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                View Case Studies <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Pain vs Pleasure (Calculator) Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-black to-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mathematics of Scale</h2>
              <p className="text-gray-400">Numbers don't lie. See the difference AI implementation makes.</p>
            </div>

            <ProfitCalculator />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <GlassCard className="hover:border-gold/30 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Neural Networks</h3>
              <p className="text-gray-400">Custom trained models that understand your specific business context and voice.</p>
            </GlassCard>

            <GlassCard className="hover:border-gold/30 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Scaling</h3>
              <p className="text-gray-400">Infrastructure that automatically adjusts resources based on real-time demand.</p>
            </GlassCard>

            <GlassCard className="hover:border-gold/30 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade encryption and data protection protocols for all your proprietary data.</p>
            </GlassCard>
          </div>
        </section>
      </main>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}

export default App;
