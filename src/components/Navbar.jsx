import React from 'react';
import ShimmerButton from './Button';
import { Bot } from 'lucide-react';

const Navbar = ({ onOpenQuiz }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                        <Bot size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">IQairus</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Solutions</a>
                    <a href="#" className="hover:text-white transition-colors">Case Studies</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                </div>

                <ShimmerButton onClick={onOpenQuiz} className="hidden md:flex">
                    Start Checkup
                </ShimmerButton>
            </div>
        </nav>
    );
};

export default Navbar;
