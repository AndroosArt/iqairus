import React from 'react';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                className
            )}
            {...props}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </button>
    );
};

// Actually, the user requested "animate-shimmer-btn". Let's use a simpler implementation that matches the prompt's specific request for that class if possible, or a high-quality equivalent.
// The prompt mentioned: "Verify that the primary buttons use the `animate-shimmer-btn` style for the premium, animated look."
// I defined `shimmer-btn` in tailwind.config.js. Let's use that.

const ShimmerButton = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative px-8 py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group",
                "bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer-btn border border-slate-800",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
};

export default ShimmerButton;
